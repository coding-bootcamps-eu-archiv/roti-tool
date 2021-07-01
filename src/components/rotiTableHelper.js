export default {
  filterByTrainer: (rotis, trainerName) => {
    return rotis.filter((roti) => roti.trainer.includes(trainerName));
  },
  filterByTopic: (rotis, topic) => {
    return rotis.filter((roti) => roti.topic.includes(topic));
  },
  filterByDatum: (rotis, sysDate) => {
    return rotis.filter((roti) => roti.sysDate.includes(sysDate));
  },
};
