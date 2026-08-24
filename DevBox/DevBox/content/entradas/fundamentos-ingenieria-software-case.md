---
titulo: "Fundamentos de la Ingeniería Asistida por Computadora y Taxonomía CASE"
tipo: deber
fecha: 2026-08-23
fechaEntrega: 2026-08-28
semana: 1
unidad: 1
estado: entregado
progreso: 100
destacada: true
autores: ["Integrante 01"]
repo: null
capturas: ["/imagenes/fundamentos-case.jpg"]
tecnologias: ["CASE", "I-CASE", "BPMN", "UML", "GCS", "Git", "SonarQube", "Selenium", "GitHub Actions"]
resumen: "Fundamentos vistos en clase sobre tecnología CASE, bloques constitutivos, análisis de la taxonomía del artículo guía y taxonomía moderna propuesta con ejemplos aplicados."
muestra: false
---

## 1. Fundamentos de la Ingeniería de Software Asistida por Computadora

### A. Definición y Propósito
La **Ingeniería de Software Asistida por Computadora** (*Computer-Aided Software Engineering* o **CASE**) comprende el conjunto de aplicaciones informáticas, métodos y procedimientos diseñados para apoyar o automatizar las actividades que abarcan el desarrollo, administración y mantenimiento del software [1], [2].

Su objetivo esencial es transformar el desarrollo de software en una disciplina de ingeniería rigurosa, incrementando la productividad y la calidad del producto final mediante la reducción del esfuerzo manual repetitivo [1]–[3].

![Ecosistema y Fundamentos de Herramientas CASE](/imagenes/fundamentos-case.jpg)

### B. El Espacio de Trabajo en la Ingeniería de Software
Tal como se fundamentó en clase, un entorno de desarrollo eficiente funciona como un taller especializado que articula tres elementos clave [2]:
1. **Colección de herramientas:** Aplicaciones adecuadas y específicas para construir cada componente del sistema.
2. **Organización metodológica:** Estructura que permite ubicar la herramienta precisa y utilizarla con eficacia en el momento oportuno.
3. **Persona cualificada:** Ingenieros de software y gestores de proyecto con el criterio técnico para interpretar los resultados y gobernar las herramientas.

### C. Bloques Constitutivos de la Tecnología CASE
Un entorno CASE no es una herramienta aislada en el vacío; se estructura sobre una pila piramidal de capas interdependientes [1], [2]:
* **Herramientas CASE (Cúspide):** Aplicaciones directas para análisis, diseño, codificación, pruebas y gestión.
* **Marco de integración:** Programas especializados que permiten la comunicación inter-herramientas, la persistencia en la base de datos del proyecto y una interfaz con apariencia homogénea.
* **Servicios de portabilidad:** Puente que permite a las herramientas migrar entre distintas plataformas de hardware y sistemas operativos sin mantenimiento adaptativo severo.
* **Sistema operativo:** Administrador del hardware, servicios de red y ejecución unificada del entorno.
* **Plataforma hardware:** Estaciones de trabajo interconectadas para soportar el trabajo colaborativo.
* **Arquitectura de entorno (Base):** Cimientos de hardware, software y patrones de trabajo humano.

### D. El Repositorio CASE y los Entornos Integrados (I-CASE)
En los inicios de la disciplina, el repositorio "era una persona" (el programador que memorizaba la estructura del proyecto) [1], [2]. En la actualidad, el **repositorio CASE** es una base de datos activa centrada en un **metamodelo** que garantiza:
* **Integridad de datos:** Reglas semánticas y modificaciones en cascada automáticas ante cambios de diseño.
* **Información compartida y concurrencia:** Control multiusuario, bloqueos y prevención de sobreescrituras.
* **Gestión de Configuración de Software (GCS):** Control estricto de versiones, rastreo de requerimientos bidireccional (hacia adelante y hacia atrás), auditoría y sincronización entre copias locales y el servidor central [1], [2].

---

## 2. Ejemplo de Utilización: Sistema Web de Citas Médicas

Para evidenciar la aplicación práctica de CASE a lo largo de las etapas del software, se presenta el caso de un equipo de desarrollo que construye un sistema hospitalario de citas médicas:

![Flujo de trabajo asistido por CASE en un sistema de citas médicas](/imagenes/ejemplo-citas-medicas-case.jpg)

1. **Gestión y Seguimiento de Requisitos:** Los requisitos funcionales y no funcionales se capturan, priorizan y aíslan mediante herramientas como *IBM DOORS Next* o *Jira*.
2. **Modelado de Procesos de Negocio:** El flujo de solicitud, confirmación y cancelación de turnos se modela formalmente bajo la notación *BPMN* (ej. *Camunda* o *Bizagi*).
3. **Análisis y Diseño del Sistema:** La arquitectura estática y dinámica (diagramas de clases, paquetes y secuencia) se representa con notación *UML* en *Enterprise Architect*.
4. **Diseño y Prototipado de Interfaz:** La interfaz gráfica de usuario se valida interactivamente con médicos y pacientes mediante *Figma*.
5. **Control de Versiones y Configuración (GCS):** El código fuente, ramas de trabajo (*branches*) y fusiones se administran con *Git* y *GitHub*.
6. **Control de Calidad del Código:** *SonarQube* ejecuta análisis estático continuo auditando estándares de codificación, deuda técnica y seguridad.
7. **Automatización de Pruebas:** *Selenium* y *Cypress* ejecutan suites de pruebas dinámicas sobre los formularios y flujos del sistema.
8. **Integración y Despliegue Continuo (CI/CD):** *GitHub Actions* compila, ejecuta las pruebas de regresión y automatiza el despliegue a los servidores.

Este caso demuestra que CASE en la práctica consiste en un ecosistema de herramientas interoperables coordinadas a través de repositorios y pipelines automatizados [1]–[3].

---

## 3. Análisis de la Taxonomía de la Lectura

El documento base de la asignatura (*Taxonomía de Herramientas CASE* / Roger S. Pressman) [1], [2] analiza la clasificación de las herramientas considerando los riesgos inherentes de solapamiento funcional y jerárquico.

### A. Niveles de Integración CASE
La lectura establece el espectro de integración según el grado de acoplamiento:
* **Herramienta individual (Solución puntual):** Opera de forma autónoma sin comunicación directa con otros programas.
* **Intercambio de datos:** Emplea formatos de exportación/importación estándar para transferir archivos entre herramientas.
* **Puentes y asociaciones:** Conexión directa desarrollada entre dos herramientas complementarias (ej. modelador visual enlazado a un generador de código).
* **Fuente única:** Suite comercial cerrada donde un único proveedor empaqueta múltiples utilidades.
* **Entorno de Soporte de Proyectos Integrado (IPSE / EAIP / I-CASE):** Integración homogénea sobre un repositorio central, con protocolo de presentación unificado y servicios de gestión de herramientas (SGH).

| Nivel | Tipo de Integración | Grado de Cohesión | Mecanismo de Comunicación |
| :---: | :--- | :---: | :--- |
| **1** | **Herramienta individual** *(Solución puntual)* | Mínima | Sin comunicación externa; ejecución aislada. |
| **2** | **Intercambio de datos** | Baja | Exportación/importación mediante formatos estándar. |
| **3** | **Puentes y asociaciones** | Media | Enlace punto a punto entre herramientas complementarias. |
| **4** | **Fuente única** | Alta | Suite propietaria cerrada provista por un solo fabricante. |
| **5** | **IPSE / EAIP *(I-CASE)*** | **Máxima** | **Repositorio centralizado, protocolo común y gestión de objetos.** |

*(De menor integración en el Nivel 1 a integración total en el Nivel 5)*

### B. Clasificación Funcional de la Lectura
La lectura organiza las herramientas por su papel operativo dentro del ciclo de vida [1]:
* **Planificación y Gestión de Proyectos:** Modelado estratégico de procesos, estimación de costes/esfuerzo, desglose de tareas (WBS) y análisis de riesgos.
* **Seguimiento de Requisitos:** Aislamiento y almacenamiento sistemático de requerimientos a partir de solicitudes y RFP.
* **Métricas y Gestión:** Recolección de medidas de productividad (LDC/persona-mes, puntos de función) y calidad técnica del diseño.
* **Herramientas de Soporte:** Autoedición y producción de documentación (que absorbe entre el 20% y 30% del esfuerzo del proyecto), software de comunicaciones y gestión de bases de datos.
* **Gestión de Configuración de Software (GCS):** Identificación de elementos, control de versiones, control de cambios, auditoría y contabilidad de estados.
* **Análisis y Diseño:** Técnicas estructuradas (AE/DE) y orientadas a objetos para evaluar consistencia y prevenir propagación de errores al código.
* **Simulación y Prototipos (PRO/SIM):** Predicción del comportamiento en tiempo real, generadores de pantallas y lenguajes de cuarta generación (4GL).
* **Programación:** Compiladores, editores, depuradores y entornos orientados a objetos con herramientas de inspección de bibliotecas.
* **Integración y Pruebas (SQE):** Análisis estático (inspección de código y requisitos), análisis dinámico (sondas intrusivas/no intrusivas, cobertura de rutas) y controladores de pruebas de regresión.
* **Reingeniería:** Ingeniería inversa (código a modelo), reestructuración sintáctica y migración de esquemas de bases de datos tradicionales a relacionales u objetos.

---

## 4. Taxonomía Propuesta de Herramientas CASE

Tomando como base la taxonomía funcional de la lectura y adaptándola a los paradigmas actuales de ingeniería de software (DevOps, metodologías ágiles, computación en la nube e Inteligencia Artificial Generativa), se propone la siguiente taxonomía organizada en cinco dimensiones operativas:

| Dimensión Funcional | Propósito y Alcance en la Ingeniería de Software | Ejemplos Representativos | Caso / Aplicación Breve |
| :--- | :--- | :--- | :--- |
| **1. Gestión Ágil y Trazabilidad de Requisitos** | Planificación iterativa, administración de historias de usuario, estimación y matriz de trazabilidad continua de requisitos. | *Jira*, *Azure DevOps Boards*, *Linear*, *IBM DOORS Next*. | Seguimiento de requisitos desde el backlog hasta la entrega del sprint. |
| **2. Modelado, Arquitectura y Prototipado (UX/UI)** | Representación formal del sistema (UML, BPMN, modelo C4), diagramación declarativa (*Diagrams-as-Code*) y prototipos de interfaz interactivos. | *Enterprise Architect*, *PlantUML*, *Mermaid.js*, *Figma*, *Camunda*. | Diseño de diagramas de secuencia para pagos en línea y prototipos UI en Figma. |
| **3. Desarrollo y Asistencia Cognitiva (AI-CASE)** | Entornos integrados de desarrollo enriquecidos con modelos de lenguaje contextuales, generación y refactorización asistida de código. | *Visual Studio Code*, *Cursor IDE*, *GitHub Copilot*, *JetBrains AI*. | Autocompletado semántico de consultas a bases de datos y creación de controladores API. |
| **4. Calidad, Verificación y Seguridad (DevSecOps)** | Análisis estático de código (SAST), análisis dinámico (DAST), ejecución de suites de pruebas automáticas (unitarias, integración, E2E) y auditoría de vulnerabilidades. | *SonarQube*, *Selenium*, *Cypress*, *JUnit*, *Snyk*, *OWASP ZAP*. | Bloqueo preventivo de despliegues al detectar fallas de seguridad OWASP en el código. |
| **5. Automatización CI/CD y Operaciones** | Orquestación de pipelines de construcción, infraestructura como código (IaC), contenedores, entrega continua y observabilidad. | *GitHub Actions*, *GitLab CI/CD*, *Docker*, *Kubernetes*, *Terraform*. | Pipeline que compila, ejecuta pruebas y publica automáticamente el sistema en la nube. |

---

## Referencias

```text
[1] R. S. Pressman, "Ingeniería del Software Asistida por Computadora," en Ingeniería del Software: Un enfoque práctico, 5.ª ed. Madrid, España: McGraw-Hill Interamericana, 2002, cap. 31, pp. 561-565.

[2] S. Jara Moya, "Ingeniería de Software Asistida por Software - Unidad 1: Fundamentos y Taxonomía CASE," Universidad Técnica de Ambato (UTA), Ambato, Ecuador, Diapositivas de clase y documento guía, 2025.

[3] I. Sommerville, Ingeniería del Software, 6.ª ed. Madrid, España: Addison Wesley, 2001.

[4] A. Fuggetta, "A classification of CASE technology," IEEE Computer, vol. 26, no. 12, pp. 25-38, Dec. 1993, doi: 10.1109/2.247645.
```
