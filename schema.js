import {buildSchema} from 'graphql'

const schema = buildSchema(`

        type detail
        {
            id :ID
            branch : String
            reporting_method : String
            category : String
            sub_category : String
            priority : Stack
            nature : String
            case_manager : String
            case_reporter : String
            case_status : String
        }
        enum Stack
        {
            High
            Medium 
            Low
        }

        type Query
        {
            getdetail(id:ID) : detail
        }

        input DetailInput
        {
            id :ID
            branch : String
            reporting_method : String
            category : String
            sub_category : String
            priority : Stack
            nature : String
            case_manager : String
            case_reporter : String
            case_status : String

        }
        type Mutation
        { 
            createdetail(input : DetailInput ) : detail
        }

`)


export default schema;