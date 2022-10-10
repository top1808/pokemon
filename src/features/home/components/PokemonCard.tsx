import React from 'react';

type Props = {
  name: string;
  image: string;
};

const PokemonCard: React.FC<Props> = (props: Props) => {
  const { name, image } = props;
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '12%',
        height: 200,
        margin: 12,
        borderRadius: 12,
        color: '#000',
        padding: 12,
        textTransform: 'uppercase',
      }}
    >
      <img src={image} alt='' width='100%' />
      <h1
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {name}
      </h1>
    </div>
  );
};

export default PokemonCard;
