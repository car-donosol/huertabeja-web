export default function ServiceInfo() {
  const services = [
    {
      title: "Despacho Gratis",
      desc: "Envío gratis en pedidos sobre $40.000 sólo en Santiago",
      icon: (
        <svg className="w-10 h-10 text-[#2e8b57]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0-3-18.75m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0V2.25a1.125 1.125 0 0 0-1.125-1.125h-6.375a1.125 1.125 0 0 0-1.125 1.125H8.25m11.25 9-1.25 4.5M16.5 18.75h-2.25m-7.5 0H9" /></svg>
      )
    },
    {
      title: "Pago Seguro",
      desc: "Paga con tarjeta, transferencia o efectivo contra entrega",
      icon: (
        <svg className="w-10 h-10 text-[#2e8b57]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
      )
    },
    {
      title: "Servicio Amigable",
      desc: "Nuestro equipo está siempre listo para ayudarte con una sonrisa",
      icon: (
        <svg className="w-10 h-10 text-[#2e8b57]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
      )
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 hover:shadow-sm transition-shadow">
            <div className="flex-shrink-0 mt-1">{service.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}