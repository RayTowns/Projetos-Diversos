import './Products.css';

const P01 ={
    title: 'Product 01',
    price: 'R$95,00',
    description: 'Descrição do primeiro produto',
    imageURL: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg'
}

const P02 ={
    title: 'Product 02',
    price: 'R$55,00',
    description: 'Descrição do segundo produto',
    imageURL: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg'
}

const P03 ={
    title: 'Product 03',
    price: 'R$125,00',
    description: 'Descrição do terceiro produto',
    imageURL: 'https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg'
}

export default function Products() {
    return (
      <>
        <div className='Section-title' id='products'>
            <h1>Meus Produtos</h1>
        </div>
        <div className="Products-style">
            <div className='Product-style'>
            <h1>{P01.title}</h1>
            <img
            className="product"
            src={P01.imageURL}
            alt={'Photo of ' + P01.title}
            style={{
                width: P01.imageSize,
                height: P01.imageSize
            }}
            />
            <p className="Product-description">{P01.description} {P01.price}</p>
            </div>

            <div className='Product-style'>
            <h1>{P02.title}</h1>
            <img
            className="product"
            src={P02.imageURL}
            alt={'Photo of ' + P02.title}
            style={{
                width: P02.imageSize,
                height: P02.imageSize
            }}
            />
            <p className="Product-description">{P02.description} {P02.price}</p>
            </div>
            
            <div className='Product-style'>
            <h1>{P03.title}</h1>
            <img
            className="product"
            src={P03.imageURL}
            alt={'Photo of ' + P03.title}
            style={{
                width: P03.imageSize,
                height: P03.imageSize
            }}
            />
            <p className="Product-description">{P03.description} {P03.price}</p>
            </div>
        </div>
      </>
    );
  }

