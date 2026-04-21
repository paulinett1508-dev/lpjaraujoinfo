"use server";

export interface LeadFormData {
  nome: string;
  municipio: string;
  cargo: string;
  whatsapp: string;
}

export interface LeadResult {
  ok: boolean;
  error?: string;
}

export async function submitLead(data: LeadFormData): Promise<LeadResult> {
  const { nome, municipio, cargo, whatsapp } = data;

  if (!nome.trim() || nome.trim().length < 3) return { ok: false, error: "nome" };
  if (!municipio.trim()) return { ok: false, error: "municipio" };
  if (!cargo) return { ok: false, error: "cargo" };
  if (whatsapp.replace(/\D/g, "").length < 10) return { ok: false, error: "whatsapp" };

  /* TODO: integrar com Resend ou outro provedor de e-mail
     Ex:
     const resend = new Resend(process.env.RESEND_API_KEY);
     await resend.emails.send({
       from: "noreply@lpjaraujoinfo.com.br",
       to: EMAIL,
       subject: `Novo lead: ${nome} — ${municipio}`,
       html: `<p>${nome} (${cargo}) de ${municipio} quer uma demonstração. WhatsApp: ${whatsapp}</p>`,
     });
  */

  return { ok: true };
}
