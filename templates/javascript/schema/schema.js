const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt
} = graphql
const GraphQLLong = require('graphql-type-long')
const accountData = require('../models/model')

const accountType = new GraphQLObjectType({
    name: "Account",
    fields: () => ({
        id: { type: GraphQLID },
        accountName: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLLong }
    })
})



const rootAccountDataQuery = new GraphQLObjectType({
    name: "rootAccountQueryType",
    fields: {
        account: {
            type: accountType,
            args: { email: { type: GraphQLString } },
            resolve(parent, args) {
                return accountData.findOne({ email: args.email })
            }
        },
        accounts: {
            type: new GraphQLList(accountType),
            resolve() {
                return accountData.find()
            }
        }
    }
})

const accountDataMutation = new GraphQLObjectType({
    name: "MutationAccountData",
    fields: {
        addAccount: {
            type: accountType,
            args: {
                accountName: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLLong) }
            },
            resolve(parent, args) {
                let account = new accountData({
                    accountName: args.accountName,
                    email: args.email,
                    phone: args.phone
                })
                return account.save()
            },

        }
    }
})

module.exports = new GraphQLSchema({
    query: rootAccountDataQuery,
    mutation: accountDataMutation,
})