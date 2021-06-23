import { shallowMount } from "@vue/test-utils";
import TeamMember from "@/components/TeamMember.vue";

describe("TeamMember.vue", () => {

  it("should display a twitter link", () => { })

  it("should display name of a team member", () => {
    const testName = "Robinsen";
    const wrapper = shallowMount(TeamMember, {
      props: { name: testName },
    });
    expect(wrapper.text()).toMatch(testName);
  })

  it("should display a bulletpoints 1 to 3", () => { })
});
