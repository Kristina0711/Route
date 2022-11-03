import styles from './styles/catList.module.css';
import CatItem from './CatItem';

const CatList = (props) => {
    const {cats, toBuy} = props;

    const allCats = cats.map(cat => 
        <CatItem key={cat.id} {...cat} toBuy={toBuy} />
    )
return(
    <div className={styles.listBlock}>
<h1>Список кошечек</h1>
<div className={styles.allCats}>
    {allCats}
</div>
    </div>
)
}
export default CatList;