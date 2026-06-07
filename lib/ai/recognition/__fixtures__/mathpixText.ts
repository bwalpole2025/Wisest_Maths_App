/**
 * Captured Mathpix v3/text response shape (per docs.mathpix.com/reference/post-v3-text),
 * used by tests so we never call the real API. Represents a two-line handwritten
 * solution "2x + 1 = 7 / x = 3".
 */
export const MATHPIX_TEXT_FIXTURE = {
  request_id: "2024_06_06_test",
  text: "\\( 2x + 1 = 7 \\)\n\\( x = 3 \\)",
  latex_styled: "x = 3",
  confidence: 0.97,
  confidence_rate: 0.99,
  data: [
    { type: "latex", value: "2x + 1 = 7" },
    { type: "latex", value: "x = 3" },
  ],
  line_data: [
    { type: "math", text: "2x + 1 = 7", cnt: [[0, 0]], confidence: 0.98, is_printed: false, is_handwritten: true },
    { type: "math", text: "x = 3", cnt: [[0, 40]], confidence: 0.97, is_printed: false, is_handwritten: true },
  ],
};
