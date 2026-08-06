type Props = {
  dados: object | object[];
};

// Injeta um ou mais blocos de dados estruturados. O escape de "<" evita que
// qualquer texto vindo do conteúdo feche a tag script antes da hora.
export function JsonLd({ dados }: Props) {
  const blocos = Array.isArray(dados) ? dados : [dados];

  return (
    <>
      {blocos.map((bloco, indice) => (
        <script
          key={indice}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bloco).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
