import Vue from 'vue';

const actions = {

  // ─── UPLOAD A FILE TO THE SPECIFIED ENDPOINT ────────────────────────────────────
  uploadFile ({ getters }, payload) {
    if (!getters['ConfigModule/fullUploadEndpoint'])
      return console.error('uploadEndpoint not provided !');

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
        reject(error);
      }
    });
  }
};

export default actions;