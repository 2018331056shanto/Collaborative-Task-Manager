const assignedTask = `create table (
    assignId varchar(200),
    from_id varchar(200),
    task integer,
    to_id varchar(200),
    foreign key(from_id) references user(ID),
    foreign key(to_id) references user(ID)

)`;

module.exports = assignedTask;
