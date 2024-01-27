type FormActionResult = {
  type: "success" | "error" | null;
  message: string;
  data?: Record<string, any>;
};
