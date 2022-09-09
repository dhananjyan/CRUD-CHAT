export const required = v => (v?.trim() != "") || "Required";
export const email = v => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(v)) || "Invalid email";
export const minLengthEight = v => (v?.length >= 8) || "Minimum legth 8"
