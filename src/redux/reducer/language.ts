import {CHANGE_LANGUAGE, CHANGE_LANGUAGE_ACTION,
		LANGUAGE_STATE_STR_TYPE} from "../action/language"

const initialState: LANGUAGE_STATE_TYPE = {language: "ja"};

export type LANGUAGE_STATE_TYPE = {
	language: LANGUAGE_STATE_STR_TYPE
}

export const language = (state: LANGUAGE_STATE_TYPE=initialState, action: CHANGE_LANGUAGE_ACTION) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {language: action.language}
		default:
			return state
	}
}