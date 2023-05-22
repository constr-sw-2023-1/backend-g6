const Classes = {
    id: {
        type: UUID,
        required: true,
        unique:true
    },
    numClass: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    schedule: {
        weekDay: {
            type: String,
            required: true
        },
        schedule: {
            type: String
        }

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    acessToken: {
        type: String
    }

};

module.exports = CLassSchema;
