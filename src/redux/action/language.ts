export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

export type CHANGE_LANGUAGE_ACTION = {
	type: string
	language: string
}

export type LANGUAGE_STATE_STR_TYPE = ("ja" | "en" | "zh_CN")

export const change_language = (language: LANGUAGE_STATE_STR_TYPE): CHANGE_LANGUAGE_ACTION => {
	return {
		type: CHANGE_LANGUAGE,
		language: language,
	}
}