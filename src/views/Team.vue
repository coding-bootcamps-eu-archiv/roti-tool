<template>
  <div class="team">
    <h1>This is an team page</h1>
  </div>
  <ul>
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
