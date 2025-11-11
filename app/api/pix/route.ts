// import mercadopago from "@/lib/mercadopago";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { cart } = await req.json();
//     const total = cart.reduce((sum: number, p: any) => sum + (p.price || 10), 0);

//     const payment = await mercadopago.payment.create({
//       transaction_amount: total,
//       description: "Compra na Sweet Haven",
//       payment_method_id: "pix",
//       payer: {
//         email: "cliente@sweethaven.com",
//       },
//     });

//     return NextResponse.json({
//       qr_code_base64: payment.body.point_of_interaction.transaction_data.qr_code_base64,
//       qr_code: payment.body.point_of_interaction.transaction_data.qr_code,
//     });
//   } catch (error) {
//     console.error("Erro ao gerar Pix:", error);
//     return NextResponse.json({ error: "Falha ao gerar pagamento" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";

export async function POST() {
  // Simula um QR Code base64 (imagem fictícia)
  const fakeQr =
    "iVBORw0KGgoAAAANSUhEUgAAAOEAAADhAQMAAABHPi8tAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAB9JREFUeJxjYBgFo2AUjIJRMApGKwEKBQYGAAEAAQAAwJkqDwAAAABJRU5ErkJggg==";

  // Aqui poderíamos receber o carrinho e processar valores, etc.
  return NextResponse.json({
    qr_code_base64: fakeQr,
    message: "Pagamento Pix simulado com sucesso!",
  });
}
