interface HttpDataModel {
  url: string;
  other: any
}
export default {
  url: process.env.REACT_APP_URL,
  other: {}
} as HttpDataModel
