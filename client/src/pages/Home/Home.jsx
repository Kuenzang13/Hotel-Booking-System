import React from 'react';
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Home = () => {
  return (
    <div>
      <PageTitle title="Home Overview" subtitle="Welcome to the Application Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Getting Started" description="Learn more about modular components.">
          <Button onClick={() => alert('Action Triggered!')}>Explore Features</Button>
        </Card>
      </div>
    </div>
  );
};

export default Home;