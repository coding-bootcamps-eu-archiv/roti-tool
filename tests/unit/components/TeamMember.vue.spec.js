import { shallowMount } from "@vue/test-utils";
import TeamMember from "@/components/TeamMember.vue";

describe("TeamMember.vue", () => {

  it("should display a twitter link", () => {
    const wrapper = shallowMount(TeamMember, {
      props: {
        twitter: "https://twitter.com/robinboehm"
      },
    });
    const liElements = wrapper.findAll('.textContent li.twitter a');
    expect(liElements).toHaveLength(1)
    expect(liElements[0].attributes("href")).toMatch("https://twitter.com/robinboehm");
  })

  it("should display name of a team member", () => {
    const testName = "Robinsen";
    const wrapper = shallowMount(TeamMember, {
      props: { name: testName },
    });
    expect(wrapper.text()).toMatch(testName);
  })

  it("should display bulletpoints from 1 to 3", () => {
    const wrapper = shallowMount(TeamMember, {
      props: {
        bullet1: "bullet one",
        bullet2: "bullet two",
        bullet3: "bullet three"
      },
    });
    expect(wrapper.text()).toMatch("bullet one");
    expect(wrapper.text()).toMatch("bullet two");
    expect(wrapper.text()).toMatch("bullet three");

    const liElements = wrapper.findAll('.textContent li[data-test="bullet"]');
    expect(liElements).toHaveLength(3)
    expect(liElements[0].text()).toMatch("bullet one");
    expect(liElements[1].text()).toMatch("bullet two");
    expect(liElements[2].text()).toMatch("bullet three");
  })
});
