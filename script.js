document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el elemento <select> y el <div> donde se renderizará el HTML
    var selectElement = document.getElementById('cultivo');
    var contenidoDiv = document.getElementById('contenido');

    // Agregar un evento de cambio al <select>
    selectElement.addEventListener('change', function() {
        // Obtener el valor seleccionado
        var opcionSeleccionada = selectElement.value;

        // Renderizar el HTML correspondiente según la opción seleccionada
        switch (opcionSeleccionada) {
            case 'banano':
                contenidoDiv.innerHTML = `
                <div class="ficha-info">
                <h2>Banano</h2>
                <h3>Requisitos climaticos</h3>
                <p>
                    El banano requiere temperaturas cálidas y constantes entre los 20°C y los 30°C durante todo el año. Temperaturas por debajo de los 15°C o superiores a los 35°C pueden afectar negativamente el crecimiento. Se requieren precipitaciones bien distribuidas de al menos 100 mm por mes. La humedad ideal se encuentra entre 60-80%. Se necesita buena humedad del suelo. Los bananos necesitan alta intensidad lumínica, de al menos 5 horas diarias de luz solar directa. Una mayor exposición mejora el rendimiento.
                    Los suelos deben ser profundos, fértiles, bien drenados y ricos en materia orgánica. Los suelos franco arenosos o franco limosos con buen drenaje son los ideales.
                    Los vientos fuertes pueden dañar las plantas de banano, especialmente cuando están en floración o con los racimos formados. Se prefieren áreas con protección de vientos.
                </p>
                <h3>Seleccion de variedad</h3>
                <p>
                    Existen diversas variedades de banano que se cultivan comercialmente en el mundo. Algunos criterios clave para seleccionar la variedad a cultivar son:
                </p>
                <ul>
                    <li>Propósito: hay variedades para exportación, mercado local, procesamiento industrial, etc. Por ejemplo, la variedad Cavendish se cultiva mayormente para exportación.</li>
                    <li>Condiciones agroclimáticas: elegir variedades adaptadas a las temperaturas, lluvias, altitud, tipo de suelos y otras condiciones de la zona de cultivo.</li>
                    <li>Rendimiento y vida poscosecha: buscar variedades de alto rendimiento y con capacidad de maduración lenta para mayor vida poscosecha.</li>
                    <li>Resistencia a plagas y enfermedades: seleccionar variedades con buena resistencia a problemas fitosanitarios comunes de la zona.</li>
                </ul>
                <p>
                    Ecuador tiene condiciones agroclimáticas muy favorables para el cultivo de banano. Algunas de las principales variedades recomendadas para sembrar en Ecuador son:
                </p>
                <ul>
                    <li>Cavendish (Grande Naine): Es la variedad más popular y exportada desde Ecuador. Tiene buen rendimiento, adecuada resistencia a enfermedades y larga vida poscosecha. Es apta para las zonas tropicales bajas de Ecuador.</li>
                    <li>FHIA-01 (Goldfinger): Variedad híbrida con alta resistencia al mal de Panamá, que es una enfermedad limitante en ciertas zonas. Rendimientos muy altos.</li>
                    <li>FHIA-18 (Mona Lisa): Alta tolerancia a los nematodos, que son un problema importante en los bananales. Buen sabor y productividad.</li>
                </ul>
                <h3>Prepracion de Suelo</h3>
                <p>
                    Los principales pasos en la preparación del terreno para establecer una plantación de banano son:
                </p>
                <ol>
                    <li>Limpieza del terreno: Remover malezas, arbustos, rastrojos y cualquier material vegetal previo. Esto se puede realizar de forma manual o con maquinaria.</li>
                    <li>Análisis de suelo: Tomar muestras de suelo de distintas zonas del lote y enviarlas a un laboratorio especializado para su análisis físico-químico. Esto permite conocer las condiciones y fertilidad del suelo.</li>
                    <li>Encalado: Si el pH del suelo es muy ácido (menor a 5.5), se debe aplicar cal para elevar el pH a un nivel óptimo de alrededor de 6 a 7.</li>
                    <li>Nivelación del terreno: Nivelar el suelo, dándole una pendiente de drenaje adecuada mediante maquinaria apropiada (tractor y pala mecánica generalmente).</li>
                    <li>Ahoyado: Realizar los hoyos donde se sembrarán las plantas de banano. El tamaño suele ser de 40x40x40 cm aproximadamente. La distancia entre plantas es variable, pero puede ser de alrededor 2 x 2 metros.</li>
                    <li>Enmiendas y fertilización: Incorporar materia orgánica y fertilizantes en base al análisis de suelo, para mejorar las condiciones del sustrato para el desarrollo de la planta.</li>
                    <li>Instalación de drenajes: Incluir canales de drenaje para evitar encharcamientos que pudiesen afectar a las plantas.</li>
                </ol>
                <p>Eso serían los pasos principales para preparar adecuadamente el terreno antes de la siembra. La continua incorporación de materia orgánica también es esencial.</p>
                <h3>Plagas mas comunes</h3>
                <p>Algunas de las plagas más comunes que afectan el cultivo de banano son:</p>
                <ul>
                    <li>Nematodos: Son gusanos microscópicos que atacan las raíces. Generan agallas y reducen la capacidad de absorción de nutrientes y agua de la planta. Los principales son el nematodo barrenador (Radopholus similis) y el nematodo lesionador (Pratylenchus sp).</li>
                    <li>Picudo negro (Cosmopolites sordidus): Es un coleóptero que en su etapa larval horada los cormos y pseudotallos ocasionando galerías y debilitamiento severo. Los adultos también perforan las hojas para alimentarse.</li>
                    <li>Trips (Frankliniella spp): Insectos diminutos que succionan los contenidos celulares en el envés de las hojas, causando un plateado o bronceado característico. Pueden causar abortos florales y deformaciones del fruto.</li>
                    <li>Ácaros: Arañitas como el Eriophyes musae y el Tyrophagus pernicisosus habitan en las flores masculinas y brácteas dañando los frutos en desarrollo.</li>
                    <li>Cochinillas harinosas (Dysmicoccus sp): Insectos que succionan la savia y secretan sustancias azucaradas que favorecen el hollín o fumagina en las hojas e inflorescencias.</li>
                </ul>
                <p>El buen manejo agronómico y fitosanitario es esencial para prevenir infestaciones por estas plagas que reducen rendimientos y calidad en los racimos de banano.</p>
                <h3>Cosecha y Distribucion</h3>
                <p>Para cosechar banano destinado a su distribución y comercialización se deben seguir los siguientes pasos:</p>
                <ol>
                    <li>Determinar el punto de corte óptimo. Generalmente cuando el dedo central o pulgar de la mano alcanza entre 28-32 mm de diámetro. En ese grado de madurez fisiológica el racimo se corta.</li>
                    <li>El corte se realiza con un instrumento afilado y desinfectado, generalmente una media luna o una herramienta similar. El corte debe ser limpio y liso, sin desgarrares.</li>
                    <li>Limpiar la base del tallo cortado o “cuello” retirando los restos de fibra y látex con un cuchillo para facilitar la futura fumigación.</li>
                    <li>Colgar el racimo cortado en un gancho plástico limpio e inspeccionar la mano central, removiendo aquellos dedos o manos sobremaduros o dañados.</li>
                    <li>Se transportan cuidadosamente hasta la empacadora, evitando golpes, movimientos bruscos y exposición al sol para evitar acelerar procesos de maduración.</li>
                    <li>Ya en la planta de selección, empacado y tratamiento se aplican fungicidas e insecticidas para proteger el racimo de futuras infecciones.</li>
                    <li>Se empacan con plásticos de polietileno y ceras en cajas de cartón adecuadas antes de ser embalados en paletas para su distribución y comercialización.</li>
                    <li>Mientras tanto se conservan refrigerados hasta llegar al cliente, para su posterior maduración controlada.</li>
                </ol>
            </div>
                `;
                break;
            case 'maiz':
                contenidoDiv.innerHTML = 
                `
                <div class="ficha-info">
                <h2>Maiz</h2>
                <h3>Requisitos climaticos</h3>
                
                <p>
                    Temperatura: El maíz necesita temperaturas medias entre 20°C y 30°C durante su ciclo vegetativo. Temperaturas óptimas durante la floración y llenado de granos son de 25°C a 27°C. No tolera heladas. Luz: Requiere de alta luminosidad, por lo menos de 8 a 10 horas diarias de brillo solar directo.- Agua: Necesita de 600 a 800 mm bien distribuidos durante todo el ciclo del cultivo. Los periodos de floración y formación de grano son los de máxima necesidad hídrica. Altitud: Se adapta desde el nivel del mar hasta los 2.500 o 3.000 msnm. A mayor altura el ciclo se alarga considerablemente. Suelo: Prefiere suelos franco arenosos o franco limosos, con buen drenaje y alto contenido de materia orgánica. El pH óptimo está entre 5,5 y 7. En resumen, el maíz requiere de climas cálidos, húmedos, con abundante brillo solar y suelos fértiles para expresar todo su potencial productivo. Las variedades y fertilidad del terreno también son factores determinantes.
                </p>
                <h3>Seleccion de variedad</h3>
                <p>
                    Existen muchas variedades de maíz, pero la selección de la variedad a cultivar dependerá de varios factores importantes:
                </p>
                <ul>
                    <li>Propósito del cultivo: hay variedades específicas para grano seco, choclo o mazorca tierna, harina, forraje, silaje, etc.</li>
                    <li>Condiciones agroclimáticas: se deben elegir variedades adaptadas a la duración del ciclo (precoces, intermedias, tardías), altitudes, tipo de suelo, regímenes de temperatura y humedad de la zona.</li>
                    <li>Contenido nutricional: algunas poseen mayores niveles de proteína, aceite, almidón, carotenos, etc. Importante según el uso que se le dará al grano.</li>
                    <li>Resistencia a plagas y enfermedades: seleccionar variedades con buena resistencia a problemas fitosanitarios comunes de la zona.</li>
                </ul>
                <p>
                    Ecuador posee variados pisos climáticos, lo que permite el cultivo de distintas variedades de maíz. Algunas de las mejores variedades recomendadas de maíz para las principales zonas productoras de Ecuador son:
                </p>
                <p>Costa:</p>
                <ul>
                    <li>INIAP 121 (amarillo duro)</li>
                    <li>INIAP 126 (amarillo duro)</li>
                    <li>INIAP 128 (amarillo semi-duro)</li>
                </ul>
                <p>Excelente adaptación, altos rendimientos de grano seco, ciclo 110-120 días, moderada resistencia a enfermedades. Para zonas cálidas y baja altitud.</p>
                <p>Sierra:</p>
                <ul>
                    <li>INIAP 154 Fortal (amarillo duro)</li>
                    <li>INIAP 164 Jubileo (amarillo cristalino duro)</li>
                </ul>
                <p>Destacan por su adaptación a zonas de mayor altitud (hasta 2800 msnm). Rendimientos altos, ciclo 130-140 días, buena sanidad de mazorca.</p>
                <h3>Preparacion de Suelo</h3>
                <p>
                    La preparación adecuada del suelo es indispensable para obtener un buen establecimiento y rendimiento del cultivo de maíz. Los principales pasos en la preparación del terreno son:
                </p>
                <ol>
                    <li>Muestreo y análisis de suelo: Permite determinar pH, contenidos de materia orgánica, nutrientes y fertilidad.</li>
                    <li>Limpieza y rastreo: Eliminar malezas previas y rastrojos mediante labranza superficial o aplicación de herbicidas.</li>
                    <li>Subsolado: Cuando existen suelos compactados se recomienda subsolar a 40-60 cm para romper capas duras e incorporar nutrientes.</li>
                    <li>Arado o labranza: Para incorporar fertilizantes, mejorar estructura y aireación. Se recomienda a 30-40 cm de profundidad.</li>
                    <li>Surcado: Consiste en realizar camellones distanciados para la siembra. La distancia entre surcos depende de la variedad y densidad deseada.</li>
                    <li>Fertilización de fondo: Incorporar fertilizantes fosforados, nitrogenados y enmiendas pre-siembra según recomendaciones del análisis de suelo.</li>
                    <li>Control fitosanitario: Aplicar productos para prevenir y controlar plagas, nemátodos, malezas previo a la siembra.</li>
                </ol>
                <p>Eso serían los pasos principales para preparar adecuadamente el terreno antes de la siembra. La continua incorporación de materia orgánica también es esencial.</p>
                <h3>Plagas mas comunes</h3>
                <p>Algunas de las plagas más frecuentes y perjudiciales para el cultivo de maíz son:</p>
                <ul>
                    <li>Gusano cogollero (Spodoptera frugiperda): Ataca hojas y tallos tiernos. Las larvas raspan las hojas y llegan a defoliar completamente las plantas.</li>
                    <li>Pulgón amarillo (Melanaphis sacchari): Chupan la savia de las hojas inferiores y entrenudos basales, transmiten virus. Provocan marchitez y debilitamiento.</li>
                    <li>Chinche patifoliada (Leptoglossus zonatus): Succiona los granos en formación causando chancros, reducción del llenado y momificación.</li>
                    <li>Gusano elotero (Heliothis zea): Se alimenta del grano tierno en formación dentro de la mazorca, causando pudriciones importantes.</li>
                    <li>Ratas (holoquetos): Roen las semillas en germinación y las raíces de plantas jóvenes, llegando a destruir porciones grandes de cultivo.</li>
                    <li>Cuncunilla (Dalbulus maidis): Es un vector de enfermedades víricas, como el achaparramiento del maíz.</li>
                </ul>
                <p>El monitoreo regular y manejo integrado son indispensables para controlar estos organismos plaga que pueden devastar los cultivos de no ser controlados adeudamente.</p>
                <h3>Cosecha y Distribucion</h3>
                
                <p>El proceso de cosecha y distribución del maíz en Ecuador contempla varios pasos importantes:</p>
                <ol>
                    <li>Cosecha: El momento óptimo es cuando los granos alcanzan su madurez fisiológica, presentando una capa negra al pie del grano. Se cosecha de forma manual o con combinadas, cortando las mazorcas que luego se desgranan.</li>
                    <li>Secado: Generalmente se realiza de forma natural, exponiendo las mazorcas desgranadas al sol por 1 a 2 semanas dependiendo de las condiciones ambientales. El grano debe quedar con 13-14% de humedad.</li>
                    <li>Limpieza y selección: Mediante cribas y seleccionadoras mecánicas o manuales se eliminan impurezas y granos vanos o enfermos, eligiendo solo los granos enteros y viables para comercializar.</li>
                    <li>Empacado y embalaje: El grano limpio y seco se ensaca en sacos de polipropileno de 50 o 100 kg generalmente, los cuales son estibados en camiones para distribución.</li>
                    <li>Se transportan cuidadosamente hasta la empacadora, evitando golpes, movimientos bruscos y exposición al sol para evitar acelerar procesos de maduración.</li>
                    <li>Ya en la planta de selección, empacado y tratamiento se aplican fungicidas e insecticidas para proteger el racimo de futuras infecciones.</li>
                    <li>Almacenamiento y transporte: Los sacos con grano seco son estibados en bodegas ventiladas y limpias. Luego se transporta por camión a centros de acopio, puertos de embarque o directamente a plantas procesadoras según sea el destino.</li>
                    <li>Comercialización: A través de intermediarios, asociaciones de productores o directamente en mercados y centros mayoristas se comercializa para consumo interno, exportación o procesamiento industrial.</li>
                </ol>
            </div>
                `
                break;
            case 'arroz':
                contenidoDiv.innerHTML = 
                    `
                    <div class="ficha-info">
                    <h2>Arroz</h2>
                    <h3>Requisitos climaticos</h3>
                    <p>
                        Temperatura: Necesita temperaturas medias entre 20°C y 38°C. Temperaturas nocturnas inferiores a 20°C favorecen la floración. El llenado de granos requiere de 25°C a 35°C.
                        Luminosidad: Requiere de alto brillo solar, mínimo de 5 a 6 horas de sol directo al día.
                        Precipitaciones: Necesita bien distribuidos entre 1.500 mm a 2.500 mm durante el ciclo de cultivo o contar con riego que cubra estos requerimientos hídricos.
                        Humedad relativa: La humedad debe permanecer alta, superior al 70%, para un desarrollo vigoroso del cultivo.
                        Suelos: Los mejores son suelos aluviales profundos, con texturas francas, buen drenaje y alto contenido de materia orgánica. El pH óptimo es ligeramente ácido, entre 5,5 y 6,8.
                        Altitud: Se adapta desde el nivel del mar hasta los 2.500 msnm aproximadamente.
                        En Ecuador se cuenta con zonas como Guayas, Los Ríos, Manabí y El Oro que reúnen estas condiciones ideales para el desarrollo del cultivo de arroz bajo riego.
                    </p>
                    <h3>Seleccion de variedad</h3>
                    <p>Ecuador cuenta con muy buenas variedades de arroz desarrolladas por instituciones
                        nacionales, adaptadas a las diferentes condiciones agroecológicas del país. Algunas de
                        las mejores variedades recomendadas son:</p>
                        
                        <ul>
                          <li>
                            <p>Zonas bajas (Guayas, Los Ríos):</p>
                            <ul>
                              <li>INIAP 15: Muy popular, alto rendimiento potencial. Ciclo 140-155 días. Grano
                        semilargo. Recomendada para siembras tardías.</li>
                              <li>INIAP 14: Excelente calidad molinera. Precocidad intermedia (130 días). Grano largo
                        delgado, susceptible al volcamiento.</li>
                            </ul>
                          </li>
                          <li>
                            <p>Zonas medias (Bolívar, Cotopaxi):</p>
                            <ul>
                              <li>INIAP 17: Rendimientos hasta 8 ton/ha, ciclo 165 días, moderada resistencia al
                        friaje, grano semilargo.</li>
                              <li>F2000: Variedad de nuevo lanzamiento, grano largo de alta calidad, buen
                        comportamiento en zonas frías.</li>
                            </ul>
                          </li>
                          <li>
                            <p>Zonas altas (Carchi, Imbabura):</p>
                            <ul>
                              <li>INIAP 21: Tolerante al frío, muy precoz (105-115 días), adaptada hasta los 2.250
                        msnm. Grano corto.</li>
                              <li>INIAP 22: Excelente adaptación a día corto. Muy resistente al frío. De 130-140 días
                        en alturas sobre 1800 msnm.</li>
                            </ul>
                          </li>
                        </ul>
                        
                        <p>EI INIAP y las casas comerciales proveedoras de semilla certificada son la mejor fuente
                        para obtener variedades adaptadas a cada zona específica.</p>
                        
                    <h3>Preparacion de Suelo</h3>
                    <p>
                        La preparación adecuada del suelo es indispensable para un buen establecimiento y producción del cultivo de arroz en Ecuador. Los principales aspectos son:
                    </p>
                    <ol>
                        <li>Análisis de suelo: Determinar propiedades físicas y químicas del suelo, especialmente fertilidad, materia orgánica y ph.</li>
                        <li>Desmonte y limpieza: Eliminar malezas, rastrojos y nivelar el terreno. En suelos inundados previamente se debe permitir su mineralización.</li>
                        <li>Labranza: Pases cruzados de arado de discos o vertedera para mejor incorporación de nutrientes y materia orgánica, trituración de terrones, mejor distribución de humedad y control de malezas.</li>
                        <li>Nivelación láser: Es clave generar una pendiente muy suave del terreno (0,1 - 0,2%) hacia entradas, salidas y canales de drenaje, mediante niveladoras láser.</li>
                        <li>Fertilización: Antes de la siembra incorporar fósforo y hasta 50% del nitrógeno requerido. El resto fraccionarlo en aplicaciones complementarias.</li>
                        <li>Preparación de camas: En siembra directa sin trasplante, se preparan camellones o camas de 1-1,20 metros de ancho con 0,30 m entre ellas.</li>
                        <li>Control fitosanitario: Aplicar productos para prevenir y controlar plagas, nemátodos, malezas previo a la siembra.</li>
                    </ol>
                    <p>Una buena preparación del terreno y manejo del agua son indispensables para altos rendimientos en el cultivo de arroz.</p>
                    
                
                
                
                
                
                
                
                
                
                
                
                Cochinillas (Dactylopiidae): Algunas especies de cochinillas pueden afectar los cultivos de arroz, alimentándose de la savia de las plantas y causando daños.
                    <h3>Plagas mas comunes</h3>
                    <p>Las plagas en los cultivos de arroz pueden variar según la región y las condiciones específicas del cultivo. En Ecuador, algunas de las plagas comunes que pueden afectar los cultivos de arroz incluyen:</p>
                    <ul>
                        <li>Gorgojo del arroz (Sitophilus oryzae): Es un escarabajo que infesta granos almacenados de arroz, causando pérdidas significativas en la calidad y cantidad del grano almacenado.</li>
                        <li>Cigarras (Cicadellidae): Algunas especies de cigarras pueden ser plagas en los cultivos de arroz, ya que se alimentan de la savia de las plantas y pueden transmitir enfermedades.</li>
                        <li>Pulgones (Aphididae): Los pulgones son insectos chupadores de savia que pueden afectar los cultivos de arroz al debilitar las plantas y transmitir virus.</li>
                        <li>Gusano cogollero (Spodoptera frugiperda): Aunque es más conocido por atacar cultivos como el maíz, el gusano cogollero también puede ser una plaga del arroz, causando daños al alimentarse de las hojas y cogollos de las plantas.</li>
                        <li>RBarrenador del tallo del arroz (Chilo suppressalis): Las larvas de este insecto perforan y dañan los tallos del arroz, debilitando las plantas y afectando el rendimiento del cultivo.</li>
                    </ul>
                    <p>El monitoreo regular y manejo integrado son indispensables para controlar estos organismos plaga que pueden devastar los cultivos de no ser controlados adeudamente.</p>
                    <h3>Cosecha y Distribucion</h3>
                    
                    <p>La cosecha y distribución del arroz en Ecuador involucran varios pasos que van desde la determinación del momento de cosecha hasta la comercialización del producto: </p>
                    <ol>
                        <li>La determinación del momento óptimo de cosecha varía según la variedad de arroz y las condiciones específicas del cultivo.</li>
                        <li>Después de la cosecha, los granos de arroz suelen tener un alto contenido de humedad. Por lo tanto, es necesario secarlos para reducir su humedad a niveles seguros para el almacenamiento.</li>
                        <li>En algunos casos, se pueden utilizar métodos tradicionales de siega y trilla.</li>
                        <li>Después del secado, el arroz se almacena en silos, almacenes u otras instalaciones de almacenamiento</li>
                        <li>Antes de la distribución comercial, el arroz puede pasar por un proceso de beneficio que incluye la eliminación de la cáscara y otros componentes no comestibles.</li>
                        <li>El arroz beneficiado se empaca en bolsas o sacos para facilitar el manejo y el transporte.</li>
                        <li>Los mayoristas adquieren grandes cantidades de arroz y lo distribuyen a nivel regional.
                            Los minoristas, como supermercados y tiendas locales, adquieren el arroz para su venta directa al consumidor final.</li>
                    </ol>
                </div>
                    `
                break;
            default:
                // Manejar un caso por defecto si es necesario
                contenidoDiv.innerHTML = ' Vacio';
                break;
        }
    });
});

function mostrarInformacion() {
    var cultivoSeleccionado = document.getElementById("cultivoSelector").value;
    var informacionCultivo = document.getElementById("informacion-cultivo");

    // Lógica para mostrar información según el cultivo seleccionado
    switch (cultivoSeleccionado) {
        case "maiz":
            informacionCultivo.innerHTML = `
                <h2>Maíz</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Mes</th>
                            <th>Temperatura</th>
                            <th>Humedad</th>
                            <th>Condiciones del Suelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>todo el año, con picos entre octubre y diciembre.</td>
                            <td>20°C a 30°</td>
                            <td>requiere alta humedad, sobre 70%.</td>
                            <td>fértil, franco o franco arcilloso, pH entre 5.5 y 7.5.</td>
                        </tr>
                    </tbody>
                </table>
                <div class="consejos">
                <ul>
                    <li>
                        Preparacion del suelo:
                        <ul>
                            <li>Analizar propiedades del suelo y rotar con otros cultivos</li>
                            <li>Labrar la tierra y eliminar malezas previamente</li>
                            <li>Agregar materia orgánica y/o harina de rocas para mejorar la fertilidad</li>
                        </ul>
                    </li>
                    <li>
                        Siembra
                        <ul>
                            <li>Definir variedad y densidad de siembra según objetivos de producción</li>
                            <li>Sembrar grano directamente o utilizar plantines/plántulas</li>
                            <li>Distancias recomendadas: 0.40-1m entre surcos y 0.18-0.50 entre plantas</li>
                        </ul>
                    </li>
                    <li>
                        Cuidados del cultivo:
                        <ul>
                            <li>Combatir malezas especialmente en las primeras etapas del cultivo</li>
                            <li>Mantener la humedad del suelo mediante riego oportuno</li>
                            <li>Realizar aporques cuando las plantas alcancen 40 cm de alto</li>
                            <li>Combatir plagas comunes como gusano cogollero, chinches, etc.</li>
                        </ul>
                    </li>
                </ul>
                </div>
            `;
            break;
        case "banano":
            informacionCultivo.innerHTML = `
                <h2>Banano</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Mes</th>
                            <th>Temperatura</th>
                            <th>Humedad</th>
                            <th>Condiciones del Suelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>todo el año</td>
                            <td>22°C a 32°C</td>
                            <td>70% a 80%</td>
                            <td>franco arenoso, pH de 6 a 7.5, buen drenaje.</td>
                        </tr>
                        <!-- Agrega más filas según sea necesario -->
                    </tbody>
                </table>
                <div class="consejos">
                <ul>
                    <li>
                        Preparacion del suelo:
                        <ul>
                            <li>Limpiar/desinfectar la tierra para eliminar nematodos y plagas</li>
                            <li>Mejorar las propiedades físicas del suelo con materia orgánica/compost</li>
                            <li>Nivelar y marcar distancias de siembra: al menos 2m entre plantas</li>
                        </ul>
                    </li>
                    <li>
                        Siembra
                        <ul>
                            <li>Obtener y seleccionar vitroplantas/cormos sanos</li>
                            <li>Sembrar siguiendo distancias recomendadas, a una profundidad entre 5 y 10 cm</li>
                            <li>Asegurar buen riego en la zona radicular luego de la siembra</li>
                        </ul>
                    </li>
                    <li>
                        Cuidados del cultivo:
                        <ul>
                            <li>Deshijar para favorecer el desarrollo de tallos deseados</li>
                            <li>Podar/extirpar las hojas secas periódicamente</li>
                            <li>Poner tutores o amarrar tallos para evitar que el viento los quiebre</li>
                            <li>Fertilizar y aplicar otros cuidados de acuerdo al análisis foliar</li>
                        </ul>
                    </li>
                </ul>
                </div>
            `;
            break;
            case "arroz":
            informacionCultivo.innerHTML = `
                <h2>Arroz</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Mes</th>
                            <th>Temperatura</th>
                            <th>Humedad</th>
                            <th>Condiciones del Suelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>febrero a abril para la sierra; abril a julio para la costa</td>
                            <td>20°C a 35°C</td>
                            <td>requiere mucha humedad por inundación</td>
                            <td> franco arenoso o arcilloso, pH de 5 a 6.5</td>
                        </tr>
                        <!-- Agrega más filas según sea necesario -->
                    </tbody>
                </table>
                <div class="consejos">
                <ul>
                    <li>
                        Preparacion del suelo:
                        <ul>
                            <li>Analizar características del suelo como fertilidad, drenaje, pH, etc</li>
                            <li>Realizar labranza primaria y secundaria para obtener una cama de siembra uniforme</li>
                            <li>Nivelar el terreno y hacer canales/diques para poder inundar/encharcar cuando sea necesario</li>
                        </ul>
                    </li>
                    <li>
                        Siembra
                        <ul>
                            <li>Utilizar semilla certificada de variedades mejoradas y adaptadas a la zona</li>
                            <li>Sembrar en almácigo o directamente volcando la plántula</li>
                            <li>Sembrar en época de lluvias para aprovechar la humedad</li>
                        </ul>
                    </li>
                    <li>
                        Cuidados del cultivo:
                        <ul>
                            <li>Mantener inundado principalmente en etapa de floración y formación/llenado de granos</li>
                            <li>Controlar malezas, especialmente en las primeras etapas del cultivo</li>
                            <li>Abonar con fertilizantes de acuerdo a análisis de suelo</li>
                            <li>Combatir plagas comunes como gusano cogollero, chinche, etc</li>
                        </ul>
                    </li>
                </ul>
                </div>
            `;
            break;
        // Agrega más casos según sea necesario
        default:
            informacionCultivo.innerHTML = "<p>Selecciona un cultivo para ver la información correspondiente.</p>";
            break;
    }
}


// Función para calcular el número de plantas 
function calcular() {

    // Obtener valores  
    let largo = document.getElementById("largo").value;
    let ancho = document.getElementById("ancho").value; 
    let distSurcos = document.getElementById("dist_surcos").value;
    let distPlantas = document.getElementById("dist_plantas").value;
  
    // Cálculos
    let numSurcos = Math.round(largo / distSurcos); 
    let plantasSurco = Math.round(ancho / distPlantas);
    
    let totalPlantas = numSurcos * plantasSurco;
  
    // Mostrar resultado
    document.getElementById("num_surcos").textContent = numSurcos;
    document.getElementById("plantas_surco").textContent = plantasSurco;
    document.getElementById("resultado").textContent = totalPlantas;
  
  }
  
  // Función para values por defecto de distancias
  function setDefaultDist() {
  
    let cultivo = document.getElementById("cultivo").value;
    
    if(cultivo === "banano") {
      document.getElementById("dist_surcos").value = 2;
      document.getElementById("dist_plantas").value = 2;
    }  
    
    if(cultivo === "maiz") {
      document.getElementById("dist_surcos").value = 0.8;
      document.getElementById("dist_plantas").value = 0.5;
    }
    
    if(cultivo === "arroz") {
      document.getElementById("dist_surcos").value = 0.4;
      document.getElementById("dist_plantas").value = 0.3;
    }   
  
  }


//nevo

const taskInput = document.querySelector(".task-input input"),
    filters = document.querySelectorAll(".filters span"),
    clearAll = document.querySelector(".clear-btn"),
    taskBox = document.querySelector(".task-box");

let editId,
    isEditTask = false,
    todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

function showTodo(filter) {
    let liTag = "";
    if (todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : "";
            if (filter == todo.status || filter == "all") {
                liTag += `<li class="task">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                        <p class="${completed}">${todo.name}</p>
                    </label>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="task-menu">
                            <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                            <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                    </div>
                </li>`;
            }
        });
    }

    taskBox.innerHTML = liTag || `<span>You don't have any task here</span>`;
    let checkTask = taskBox.querySelectorAll(".task");
    !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
    taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");

}
showTodo("all");

//i have added a task before tutorial so that shows here for test
// if you don't have any tasks no problem it isn't bug

function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    document.addEventListener("click", e => {
        if (e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    });
}

function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos))
}

function editTask(taskId, textName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = textName;
    taskInput.focus();
    taskInput.classList.add("active");
}

function deleteTask(deleteId, filter) {
    isEditTask = false;
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(filter);
}

clearAll.addEventListener("click", () => {
    isEditTask = false;
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
});

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" && userTask) {
        if (!isEditTask) {
            todos = !todos ? [] : todos;
            let taskInfo = { name: userTask, status: "pending" };
            todos.push(taskInfo);
        } else {
            isEditTask = false;
            todos[editId].name = userTask;
        }
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo(document.querySelector("span.active").id);
    }
});