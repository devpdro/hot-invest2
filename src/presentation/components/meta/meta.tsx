import Head from 'next/head'

type MetaProps = {
  title: string
  description: string
  keywords: string
  image?: string
}

const Meta = ({ title, description, keywords, image }: MetaProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />

    {/* Facebook Pixel */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Função principal do Facebook Pixel
          !function(f,b,e,v,n,t,s) {
            if(f.fbq)return; // Se o Pixel já estiver carregado, sai da função
            n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            
            if(!f._fbq)f._fbq=n; // Define a fila de eventos
            
            n.push=n; 
            n.loaded=!0; 
            n.version='2.0';
            n.queue=[]; 

            // Cria um novo elemento de script para carregar o Facebook Pixel
            t=b.createElement(e); 
            t.async=!0;
            t.src=v; 
            
            // Insere o script no documento
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          // Inicializa o Pixel com o seu ID
          fbq('init', 'SEU_PIXEL_ID'); 

          // Registra a visualização de página
          fbq('track', 'PageView');
        `,
      }}
    />

    {/* Fallback para rastreamento sem JavaScript 
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=SEU_PIXEL_ID&ev=PageView&noscript=1`}
      />
    </noscript>
    */}
  </Head>
)

export default Meta
