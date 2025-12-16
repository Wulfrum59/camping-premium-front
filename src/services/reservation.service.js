import axios from "axios";

const API_URL = "http://localhost:3000/api/reservations";

const reservationService = {
  create: (data) => axios.post(API_URL, data),
};

export default reservationService;