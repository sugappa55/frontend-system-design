const Breadcrumbs = ({
  links,
  color = 'primary',
  separator = '/'
}: {
  links: { title: string; url: string; isCurrent?: boolean }[];
  color?: 'primary' | 'secondary';
  separator?: '/' | '>';
}) => {
  return (
    <div className='flex gap-1' style={{ color: color === 'primary' ? 'blue' : 'green' }}>
      {links.map(link =>
        link.isCurrent ? (
          <span className='text-black'>{link.title}</span>
        ) : (
          <div className='flex gap-1'>
            <a href={link.url} className=' hover:underline '>
              {link.title}
            </a>
            <span>{separator}</span>
          </div>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;

export const BreadcrumbsPreview = () => {
  return (
    <div className='flex flex-col gal-8'>
      <Breadcrumbs
        color='primary'
        links={[
          {
            title: 'list',
            url: '/list'
          },
          {
            title: 'men',
            url: '/men'
          },
          {
            title: 'products',
            url: '/products'
          },
          {
            title: 'shirt',
            url: '/763298hkjahfkjb',
            isCurrent: true
          }
        ]}
      />{' '}
      <Breadcrumbs
        color='secondary'
        links={[
          {
            title: 'list',
            url: '/list'
          },
          {
            title: 'women ☕️',
            url: '/women'
          },
          {
            title: 'products',
            url: '/products'
          },
          {
            title: 'sweat shirt',
            url: '/763298hkjahfkjb',
            isCurrent: true
          }
        ]}
        separator='>'
      />
    </div>
  );
};
