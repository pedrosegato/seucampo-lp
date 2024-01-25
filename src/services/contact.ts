"use server";

import mailchimp from "@mailchimp/mailchimp_marketing";

export async function registerContact(prevState: FormActionResult, formData: FormData) {
  const email = formData.get("email");
  const phone = formData.get("phone");

  const audienceId = process.env.MC_AUDIENCE_ID ?? "";
  const apiKey = process.env.MC_API_KEY ?? "";
  const server = process.env.MC_SERVER ?? "";

  mailchimp.setConfig({
    apiKey,
    server,
  });

  try {
    await mailchimp.lists.addListMember(audienceId, {
      email_address: email as string,
      merge_fields: {
        phone: phone as string,
      },
      status: "subscribed",
    });

    return { message: "Mensagem enviada com sucesso!", type: "success", data: {} } as FormActionResult;
  } catch (error: any) {
    return { message: `Error: ${error?.message}`, type: "error", data: {} } as FormActionResult;
  }
}
