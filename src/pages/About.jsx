function About() {
    return (
      <>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          A React app to search GitHub profiles and see profile details. This
          project is done with
          <a href='https://frontsightmarketing.com'>
            {' '}
            ReactJS and Github API
          </a>{' '}
         
          <strong>
            <a href='https://github-finder-gvlfsnu4q-ghawthorne.vercel.app/'></a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
         Twitter
          <a className='text-white' href='https://twitter.com/gshawthorne'>
            
          </a>
        </p>
      </>
    )
  }
  
  export default About