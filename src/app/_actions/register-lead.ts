"use server";

export interface RegisterInput {
  name: string;
  email: string;
  phone: string;
  church?: string;
  workshop?: string;
  acceptTerms: boolean;
}

export interface RegisterResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function registerLead(input: RegisterInput): Promise<RegisterResult> {
  // Simulação de validação e persistência no servidor
  const errors: Record<string, string[]> = {};

  if (!input.name || input.name.trim().length < 3) {
    errors.name = ["Por favor, informe seu nome completo (mínimo 3 caracteres)."];
  }

  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = ["Por favor, informe um endereço de e-mail válido."];
  }

  if (!input.phone || input.phone.trim().length < 8) {
    errors.phone = ["Por favor, informe um telefone/WhatsApp de contato."];
  }

  if (!input.acceptTerms) {
    errors.acceptTerms = ["É necessário concordar com os termos de participação."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Verifique os dados preenchidos no formulário.",
      errors,
    };
  }

  // Em produção, salvaria no banco de dados (ex: Drizzle / Prisma) ou dispararia webhook de inscrição
  return {
    success: true,
    message: `Parabéns, ${input.name}! Sua inscrição para o "Somos Um — Festividade de Dezembro" foi confirmada com sucesso. Enviamos os detalhes para o seu e-mail.`,
  };
}
