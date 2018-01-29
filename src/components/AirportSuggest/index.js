import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import AirportChips from '../AirportChips';
import { api } from '../../settings';



function renderInput(inputProps) {
    const { classes, helperText, autoFocus, label, placeholder, value, ref, ...other } = inputProps;

    return (
        <TextField
            helperText={helperText}
            error={!!helperText}
            label={label}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className={classes.textField}
            value={value}
            inputRef={ref}
            InputProps={{
                classes: {
                    input: classes.input,
                },
                ...other,
            }}
        />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 300, color: 'red' }}>
                            {part.text}
                        </span>
                    ) : (
                            <strong key={String(index)} style={{ fontWeight: 500 }}>
                                {part.text}
                            </strong>
                        );
                })}
            </div>
        </MenuItem>
    );
}

function renderSuggestionsContainer(options) {
    const { containerProps, children } = options;

    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}

function getSuggestionValue(suggestion) {
    return suggestion.value;
}

async function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const array = inputLength <= 1
        ? []
        : (await api.get(`/airports`, { params: { term: inputValue } })).data;
    return array;
}

const styles = theme => ({
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    suggestionsContainerOpen: {
        zIndex: 2,
        position: 'absolute',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    textField: {
        width: '100%',
    },
    chipContainer: {
        flexWrap: 'wrap',
        display: 'flex',
    },
    chip: {
        margin: '8px 8px 0 0'
    }
});

class IntegrationAutosuggest extends React.Component {
    state = {
        value: '',
        suggestions: [],
        selectedAirports: new Set([])
    };

    handleSuggestionsFetchRequested = async ({ value }) => {
        this.setState({
            suggestions: await getSuggestions(value),
        });
    };

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    handleChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
        });
    };

    selectByEnter = (event) => {
        if (event.key === 'Enter') {
            this.onSelect();
        }
    }

    onSelect = () => {
        this.setState((prevState) => {
            const value = '';
            if (!prevState.suggestions[0]) return { value };
            const suggestion = prevState.suggestions[0].value;
            if (!suggestion) return { value };
            const nextAirport = suggestion;
            const selectedAirports = prevState.selectedAirports.add(nextAirport);
            this.props.setFieldValue(this.props.elemKey, [...selectedAirports].join(','));
            return { value, selectedAirports };
        });
    }

    onDeleteItem = (value) => {
        this.setState((prevState) => {
            const selectedAirports = prevState.selectedAirports;
            selectedAirports.delete(value);
            this.props.setFieldValue(this.props.elemKey, [...selectedAirports].join(','));
            return { selectedAirports };
        });
    }

    onBlur = () => {
        this.props.setFieldTouched(this.props.elemKey, true);
        this.onSelect();
    }

    render() {
        const { classes, touched, elemKey, errors, label, placeholder } = this.props;

        return (
            <div>
                <Autosuggest
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderInputComponent={renderInput}
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                    renderSuggestionsContainer={renderSuggestionsContainer}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    onSuggestionSelected={this.onSelect}
                    inputProps={{
                        helperText: touched[elemKey] && errors[elemKey],
                        label,
                        placeholder,
                        classes,
                        onBlur: this.onBlur,
                        value: this.state.value,
                        onChange: this.handleChange,
                        onKeyUp: this.selectByEnter,
                    }}
                />
                <div className={classes.chipContainer}>
                    <AirportChips airports={[...this.state.selectedAirports]} styleClass={classes.chip} onDelete={this.onDeleteItem}></AirportChips>
                </div>
            </div >
        );
    }
}


IntegrationAutosuggest.propTypes = {
    touched: PropTypes.object,
    errors: PropTypes.object,
    elemKey: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    classes: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func
};

export default withStyles(styles)(IntegrationAutosuggest);