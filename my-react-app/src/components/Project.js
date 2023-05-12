function Project({ project }) {
    const { name, repo, link, description, image } = project;
  
    return (
        <div className="p-3" class='col-sm-4 pad'>
        <img
          src={require(`../images/${image}`)}
          alt={name}
          style= {{width:250, height:250, objectFit: "cover"}}
          className=""
        />
        <div className="">
          <h3>
            <a href={link}>{name}</a>{' '}
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Project;