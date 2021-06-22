<template>
  <h2>Index</h2>
  <p>
    Moinsen! Das töricht Schenkelbürste betören. Das Übeltäter frickeln das
    grobschlächtig Schluckspecht. Der butterweich Schabracke. Die kess Lunte
    auftakeln. Freikörperkultur und Herrengedeck verhaspeln einfältig Fuchtel.
    Das kess Tölpel berappen. Flausen und Promenadenmischung verhaspeln famos
    Fräulein. Die frivol Übeltäter stibitzen. Das hold Scharmützel anschwärzen.
    Die dufte Freikörperkultur jauchzen. Mein lieber Scholli!
  </p>
  <button>
    <router-link to="/NewRoti" tag="button">Klick fürs ROTI</router-link>
  </button>
  <br />
  <article>
    <h2>Anleitung</h2>
    <div>
      <InstructionCard
        headline="Schritt 1"
        description="Das hold Scharmützel anschwärzen. Die dufte Freikörperkultur jauchzen. Mein lieber Scholli!"
        picture_src="https://images.unsplash.com/photo-1534481016308-0fca71578ae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdHJ1Y3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <InstructionCard
        headline="Schritt 2"
        description="Die kess Lunte auftakeln. Freikörperkultur und Herrengedeck verhaspeln einfältig Fuchtel."
        picture_src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdHJ1Y3Rpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <InstructionCard
        headline="Schritt 3"
        description="Das töricht Schenkelbürste betören. Das Übeltäter frickeln das grobschlächtig Schluckspecht. Der butterweich Schabracke. Die kess Lunte auftakeln. Freikörperkultur und Herrengedeck verhaspeln einfältig Fuchtel. Das kess Tölpel berappen. Flausen und Promenadenmischung verhaspeln famos Fräulein."
        picture_src="https://images.unsplash.com/photo-1589803299004-b9143b44275f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  </article>
  <br />
</template>

<script>
import InstructionCard from "@/components/InstructionCard.vue";

export default {
  name: "Index",
  components: { InstructionCard },
};
</script>
