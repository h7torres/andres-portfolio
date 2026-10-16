// Builds an image path inside public/images/<folder>/.
// Filenames are case-sensitive on GitHub Pages, so ".PNG" and ".png" must match the file exactly.
const img = (folder, file) => ({ src: `${import.meta.env.BASE_URL}images/${folder}/${file}` });

export const projects = [
  {
    slug: "nuestra-lagrima",
    title: "Nuestra Lagrima",
    collaborators: "In collaboration with Hernany Torres and Lance Salcedo.",
    description: "A triptych on the collision between Collectivism and Individualism.",
    year: "2025",
    images: [
      img("nuestra_lagrima", "lagrima.jpg"),
      img("nuestra_lagrima", "lagrima2.jpg"),
      img("nuestra_lagrima", "lagrima3.jpg"),
    ],
  },
  {
    // TODO: confirm title, description and year
    slug: "para-mi-ama",
    title: "Para Mi Ama",
    description: "",
    year: "",
    images: [img("ama", "para_mi_ama.jpg")],
  },
  {
    // TODO: confirm title, description and year
    slug: "people",
    title: "Our People",
    description: "",
    year: "",
    images: [img("people", "people.jpg")],
  },
  {
    // TODO: confirm title, description and year
    slug: "scotland",
    title: "At the National Museum of Scotland",
    description: "",
    year: "",
    images: [img("scotland", "at_the.PNG")],
  },
  {
    slug: "frontera",
    title: "La Frontera",
    collaborators: "In collaboration with Hernany Torres and Sanchez Productions.",
    description: "A triptych on the identities we carry.",
    year: "2024",
    images: [
      img("frontera", "frontera.jpg"),
      img("frontera", "frontera2.jpg"),
      img("frontera", "frontera3.jpg"),
    ],
  },
  {
    slug: "rancho",
    title: "Rancho E Mi Apa",
    description: "A polyptych on the ranches that watched us grow.",
    year: "2024",
    images: [
      img("rancho", "rancho1.PNG"),
      img("rancho", "rancho2.jpg"),
      img("rancho", "rancho3.PNG"),
      img("rancho", "rancho4.PNG"),
    ],
  },
];