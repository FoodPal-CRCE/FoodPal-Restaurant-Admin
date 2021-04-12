import axios from "axios";

export default axios.create({
  baseURL: "http://http://Foodpalbackend-env.eba-kdguhvqc.ap-south-1.elasticbeanstalk.com",
  timeout: 1000,
});
