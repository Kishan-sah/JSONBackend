import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PutComponent } from './put/put.component';
import { GetComponent } from './get/get.component';
import { PatchComponent } from './patch/patch.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {
        path:'post',
        component: PostComponent
    },
    {
        path:'get',
        component: GetComponent
    },
    {
        path:'put',
        component: PutComponent
    },
    {
        path:'patch',
        component: PatchComponent
    },
    {
        path:'delete',
        component:DeleteComponent
    }
];
