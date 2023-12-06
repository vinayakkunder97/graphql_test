import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';


const LikedInLocation = new GraphQLObjectType({
  name: 'LinkedInLocation',
  fields: {
    city: {type: GraphQLNonNull(GraphQLString)},
    state: {type: GraphQLNonNull(GraphQLString)},
    long: {type: GraphQLNonNull(GraphQLString)},
    lat: {type: GraphQLNonNull(GraphQLString)},
    region: {type: GraphQLNonNull(GraphQLString)}
  }
});

const LinkedInJobListing = new GraphQLObjectType({
  name: 'LinkedInJobListings',
  fields: {
    company: { type: GraphQLNonNull(GraphQLString)},
    country: { type: GraphQLNonNull(GraphQLString)},
    date: { type: GraphQLNonNull(GraphQLString)},
    department: { type: GraphQLString},
    locations: { type: LikedInLocation},
    job_description: { type: GraphQLNonNull(GraphQLString)},
    job_family: { type: GraphQLString},
    job_id: {type: GraphQLNonNull(GraphQLString)},
    job_level: {type: GraphQLString},
    job_title: {type: GraphQLNonNull(GraphQLString)},
    job_type: {type: GraphQLNonNull(GraphQLString)}, //Doubtfulll
    office_presence: {type: GraphQLString},
    salary_range: {type: GraphQLString},
    years_of_experience: {type: GraphQLString},
    event_fingerprint: {type: GraphQLNonNull(GraphQLString)}
  }
});

// Query to return the full schema
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    jobListing: {
      type: new GraphQLList(LinkedInJobListing),
      resolve: () => {
        
        return [{
          company: 'String',
          country: 'String',
          date: 'String',
          department: 'String | null',
          locations: {
            city: 'String | null',
            state: 'String | null',
            long: 'String | null',
            lat: 'String | null',
            region: 'String | null',
          },
          job_description: 'String',
          job_family: 'String | null',
          job_level: 'String | null',
          job_title: 'String',
          job_type: 'String',
          office_presence: 'String | null',
          salary_range: 'String | null',
          years_of_experience: 'String | null',
          event_fingerprint: 'String',
        }];
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery
});


export default schema;