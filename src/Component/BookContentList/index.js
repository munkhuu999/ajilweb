import React from 'react';
import SpecialCreation from '../SpecialCreation';
import MostSell from '../MostSell';
import ChildrenBook from '../ChildrenBook';
import NewBook from '../NewBook';
import BestWriter from '../BestWriter';
import PartnerOrganizations from '../PartnerOrganizations';
import BoxOfBook from '../generals/BoxOfBook';
import BoxOfBookList from '../generals/BoxOfBookList';



const BookContentList = () => {
    return (

        <div >
           
             {/* <BoxOfBookList title='Онцлох бүтээлүүд' paths='speicialbook' />               
             <BoxOfBookList title='Их борлуулалттай' /> 
             <BoxOfBookList title='Хүүхдийн ном'/>  
             <BoxOfBookList title='Шинээр нэмэгдсэн'/>  
             <BoxOfBookList title='Шилдэг зохиолч'/>
             <BoxOfBookList title='Хамтрагч байгууллагууд'/> */}

               <SpecialCreation text='Онцлох бүтээлүүд' />    
                <MostSell text='Их борлуулалттай'/>  
                <ChildrenBook text='Хүүхдийн ном'/>
                <NewBook text='Шинээр нэмэгдсэн'/>
                <BestWriter text='Шилдэг зохиолч'/>
                <PartnerOrganizations text='Хамтрагч байгууллагууд'/>
      

        </div>


    );
}
export default BookContentList;

{/* <div>
<BoxOfBookList title='Онцлох бүтээлүүд' list={list}/>
</div>
<div>
{/* <MostSell title='Их борлуулалттай'/> */}
{/* <BoxOfBookList title='Их борлуулалттай' list={list}/>
</div>
<div>
<BoxOfBookList title='Хүүхдийн ном' list={list}/>
</div>
<div>
<BoxOfBookList title='Шинээр нэмэгдсэн' list={list}/>
</div>
<div>
<BoxOfBookList title='Шилдэг зохиолч' list={list}/>
</div>
<div>
<BoxOfBookList title='Хамтрагч байгууллагууд' list={list}/>
</div>   */}