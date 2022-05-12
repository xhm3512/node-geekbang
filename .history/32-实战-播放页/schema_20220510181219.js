const { graphql, buildSchema } = require('graphql');
const mockDatabase = require('./mock-database')
const schema = buildSchema(`
    type Comment {
        id: Int
        avatar: String
        name: String
        isTop: Boolean
        content: String
        publishDate: String
        commentNum: Int
        praiseNum: Int
    }
    type Query {
        comment: [Comment]
    }
`)

schema.getQueryType().getFields().comment.resolve = () => {
    return Object.keys(mockDatabase).map(key=> {
        return mockDatabase[key];
    })
}

module.exports = schema;