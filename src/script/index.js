import './component/Navbar.js';
import './component/InputSearch.js';
import './component/TrendsForYou.js';
import './component/NavLink.js';
import './component/MakePost.js';
import './component/StoryItem.js';
import { $ } from './lib/lib.js';

const resetTextareaWhenRefresh = () => {
    const textarea = $('#makePostTextarea');
    textarea.value = ''
};

resetTextareaWhenRefresh();


