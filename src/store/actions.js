import Vue from 'vue';

const actions = {
  uploadFile ({ getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Vue.axios.post(
          getters['ConfigModule/fullUploadEndpoint'],
          payload,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        resolve(result.data.fileName);
      } catch (error) {
        console.log(error);
        reject(error)
      }
    });
  }
};

export default actions;