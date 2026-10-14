/**
 * Datos de proyectos.
 * Editar este archivo para añadir, quitar o modificar proyectos.
 *
 * Cada objeto:
 *   title        – nombre del proyecto
 *   description  – descripción breve (1-2 frases)
 *   tags         – array de tecnologías / etiquetas
 *   repo         – enlace al repositorio (GitHub, GitLab…)
 *   demo         – enlace a demo en vivo (opcional, null si no hay)
 */
const projects = [
  {
    title: 'Infraestructura HA y Plataforma de Votación',
    description:
      'Despliegue automatizado de una aplicación full-stack sobre un clúster de alta disponibilidad con Docker Swarm, HAProxy y MariaDB Galera. Incluye aprovisionamiento de VMs con Cloud-Init, monitorización con Prometheus y Grafana, y gestión automatizada de backups.',
    tags: [
      'Docker Swarm',
      'HAProxy',
      'Nginx',
      'MariaDB Galera',
      'Prometheus',
      'Grafana',
      'Cloud-Init',
      'Bash / PowerShell',
      'React',
      'PHP',
      'Portainer',
      'VirtualBox',
    ],
    repo: 'https://github.com/BaiAlbert/sistema-votacion',
    demo: null,
  },
  {
    title: 'E-Commerce y Gestión de Stock',
    description:
      'Aplicación web monolítica con control de acceso por roles (administrador y cliente) para la gestión de inventario, catálogo de productos y categorías. Incluye autenticación de usuarios, gestión de perfiles y carrito de compra.',
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'SQL'],
    repo: 'https://github.com/BaiAlbert/app-iaw',
    demo: null,
  },
  {
    title: 'Portfolio Web Personal',
    description:
      'Página web estática y responsive desarrollada en React para presentar mi perfil profesional, experiencia y proyectos de desarrollo e infraestructura.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    repo: 'https://github.com/BaiAlbert/portfolio-web',
    demo: null,
  },
]

export default projects
