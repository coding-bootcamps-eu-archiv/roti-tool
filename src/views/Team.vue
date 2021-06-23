<template>
  <header class="team">
    <h1>Wer hat's gebaut und warum?</h1>
  </header>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio culpa
    rem eligendi, temporibus consequuntur itaque veritatis? Nam, assumenda
    repudiandae a ut placeat aliquam accusantium ad hic fugit temporibus vero
    dolorum.
  </p>
  <ul class="list">
    <TeamMember v-for="member in members" :key="member.name" v-bind="member" />
  </ul>
</template>

<script>
import TeamMember from "../components/TeamMember.vue";
import members from "../components/TeamMember.js";

export default {
  name: "Team",
  components: {
    TeamMember,
  },
  created() {
    this.members = [...members];
  },
};
</script>
<style>
.list {
  all: unset;
}
</style>
