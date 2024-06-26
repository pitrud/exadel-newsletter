"use client";

import { search } from "@/actions/search";
import { insertUrlParam } from "@/helpers/urlHelpers";
import { Tag } from "@/types/main";
import { useState } from "react";
import Autosuggest, {
  ChangeEvent,
  SuggestionSelectedEventData,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest";

export default function Autocomplete() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Tag[]>([]);

  const onChange = (_: React.FormEvent<HTMLElement>, params: ChangeEvent) => {
    console.log("on change!", params);
    setValue(params.newValue);
  };
  const onSuggestionsFetchRequested = async ({
    value,
  }: SuggestionsFetchRequestedParams) => {
    const suggestions = await getSuggestions(value);

    setSuggestions(suggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "search your data",
    value,
    onChange: onChange,
  };

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    if (inputValue.length === 0) return [];

    return search(value);
  };

  const getSuggestionValue = (suggestion: Tag) => suggestion.name;

  const renderSuggestion = (suggestion: Tag) => (
    <div className="px-2 py-1 hover:bg-blue-light">{suggestion.name}</div>
  );

  const onSuggestionSelected = (
    _: React.FormEvent<any>,
    data: SuggestionSelectedEventData<Tag>
  ) => {
    insertUrlParam(data.suggestionValue);
    setValue("");
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={inputProps}
      theme={{
        container: "m-2 relative border border-blue",
        input: "p-2 bg-gray-300 w-full outline-none",
        suggestionsList: "absolute left-0 right-0 bg-white z-10",
        suggestionHighlighted: "bg-red",
      }}
    />
  );
}
