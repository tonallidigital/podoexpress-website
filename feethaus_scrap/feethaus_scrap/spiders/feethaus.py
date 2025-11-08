import scrapy

class FeethausSpider(scrapy.Spider):
    name = 'feethaus'
    allowed_domains = ['feethaus.com.mx']
    
    # Lista de URLs específicas
    start_urls = [
        'https://feethaus.com.mx/servicios-17/',      # Servicios
        'https://feethaus.com.mx/nosotros/',          # Conócenos
        'https://feethaus.com.mx/servicios-17/#tratamientos-laser',  # Tratamientos Láser
        'https://feethaus.com.mx/contacto/' # Contacto
        # Puedes agregar más URLs si es necesario
    ]

    def parse(self, response):
        # Extraer el título de cada página como verificación
        page_title = response.xpath('//title/text()').get()
        print(f"Título de la página: {page_title}")

        # Extraer todo el contenido de la página como texto
        page_content = response.xpath('//body//text()').getall()
        page_content_cleaned = ' '.join([text.strip() for text in page_content if text.strip()])
        
        # Yield para guardar el contenido extraído
        yield {
            'url': response.url,
            'title': page_title,
            'content': page_content_cleaned
        }