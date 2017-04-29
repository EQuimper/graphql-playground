import dynamoose, { Schema } from 'dynamoose';

const PostSchema = new Schema({
  _id: String,
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export default dynamoose.model('Post', PostSchema);
