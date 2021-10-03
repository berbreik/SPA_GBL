import {nanoid} from 'nanoid'


class detail
{
    constructor(id,
        {
            branch,reporting_method, category, sub_category,priority, nature , case_manager , case_reporter,case_status
        })
        {
            this.id= id
            this.branch=branch
            this.reporting_method= reporting_method
            this.category=category
            this.sub_category=sub_category
            this.priority=priority
            this.nature=nature
            this.case_manager=case_manager
            this.case_reporter=case_reporter
            this.case_status=case_status
        }
}
const container={}
 
const resolvers = {
    getdetail : ({id}) => {
        return new  detail(id, container[id])
    },
    createdetail :(input) => {
        let id=nanoid()
        container[id]= input
        return new detail(id,input)

    }
}

export default resolvers;