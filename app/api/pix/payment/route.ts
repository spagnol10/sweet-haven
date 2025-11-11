import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items } = body;

    const preference = {
      items: items.map((item: any) => ({
        title: item.name,
        quantity: item.quantity,
        currency_id: "BRL",
        unit_price: item.price,
      })),
      back_urls: {
        success: "https://seusite.com/sucesso",
        failure: "https://seusite.com/erro",
        pending: "https://seusite.com/pendente",
      },
      auto_return: "approved",
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preference),
    });

    const data = await response.json();
    return NextResponse.json({ init_point: data.init_point });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 });
  }
}
