import gql from 'graphql-tag';

const attacks = gql`
    fragment attacks on Pokemon {
        attacks {
            fast {
                name
                damage
                type
            }
            special {
                name
                damage
                type
            }
        }
    }
`;

const evolutions = gql`
    fragment evolutions on Pokemon {
        evolutions {
            id
            image
            name
            number
            types
            classification
        }
    }
`;

const evolutionRequirements = gql`
    fragment evolutionRequirements on Pokemon {
        evolutionRequirements {
            name
            amount
        }
    }
`;

const height = gql`
    fragment height on Pokemon {
        height {
            minimum
            maximum
        }
    }
`;

const weight = gql`
    fragment weight on Pokemon {
        weight {
            minimum
            maximum
        }
    }
`;

export default {
    attacks,
    evolutions,
    evolutionRequirements,
    height,
    weight
};