<x-layout>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
    <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-10">Create Post</h1>

    <div class="flex justify-center">
      <form action="{{route('create')}}" method="POST" enctype="multipart/form-data" class="p-6 w-full max-w-4xl bg-white rounded-lg shadow-lg">
        @csrf
        @method('POST')
      
        <!-- Title Field -->
        <div class="mb-6">
          <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
            Post Title:
          </label>
          <input id="title" type="text" 
                 class="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('title') border-red-500 @enderror"
                 name="title" value="{{ old('title') }}" required 
                 placeholder="Enter a compelling title for your post...">
          @error('title')
          <p class="text-red-500 text-xs italic mt-2">
              {{ $message }}
          </p>
          @enderror
        </div>

        <!-- CKEditor Content Field -->
        <div class="mb-6">
          <label for="editor" class="block text-gray-700 text-sm font-bold mb-2">Post Content:</label>
          <textarea id="editor" name="description" class="hidden">{{ old('description', '') }}</textarea>
          @error('description')
          <p class="text-red-500 text-xs italic mt-2">
              {{ $message }}
          </p>
          @enderror
        </div>

        <!-- Featured Image -->
        <div class="mb-6">
          <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Featured Image:</label>
          <input type="file" id="imageSelected" name="image" 
                 class="w-full p-3 border-2 border-gray-300 rounded-lg @error('image') border-red-500 @enderror"
                 accept="image/*">
          
          <!-- Image Preview -->
          <div class="mt-4 relative" id="imageContainer">
            <img id="imagePreview" src="#" alt="Image Preview" 
                 class="hidden max-w-full md:max-w-md rounded-lg shadow-lg border-4 border-blue-200">
            <div id="imageInfo" class="hidden mt-2 p-3 bg-gray-100 rounded-lg">
              <span id="cancelPreview" class="inline-flex items-center px-3 py-1 bg-red-500 text-white rounded-full text-sm font-bold hover:bg-red-600 cursor-pointer mr-2">
                <i class="fas fa-times mr-1"></i> Remove
              </span>
              <span id="fileSize" class="text-gray-600 text-sm"></span>
            </div>
          </div>
          
          @error('image')
          <p class="text-red-500 text-xs italic mt-2">
              {{ $message }}
          </p>
          @enderror
        </div>

        <!-- Hashtags Section -->
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">Hashtags:</label>
        
          <!-- Hidden input to store comma-separated tags -->
          <input type="hidden" name="hashtag" id="hashtagsHidden" value="{{ old('hashtag') }}">
        
          <!-- Tag container -->
          <div id="tagContainer" class="flex flex-wrap gap-2 mb-3 p-3 bg-gray-50 rounded-lg min-h-12">
            @if($initialTags && count($initialTags) > 0)
              @foreach($initialTags as $tag)
                <div class="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                  <span>#{{ $tag }}</span>
                  <button type="button" onclick="removeTag({{ $loop->index }})" class="text-white hover:text-gray-200">×</button>
                </div>
              @endforeach
            @else
              <span class="text-gray-500 text-sm">No hashtags added yet. Type below and press Enter.</span>
            @endif
          </div>
        
          <!-- Input for adding new tags -->
          <input type="text" id="hashtagInput" placeholder="Type a hashtag and press Enter to add..."
                 class="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          
          @error('hashtag')
          <p class="text-red-500 text-xs italic mt-2">
              {{ $message }}
          </p>
          @enderror
          
          <!-- Existing Hashtags Selection -->
          @if($allhashtags->isNotEmpty())
          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <div class="flex items-center mb-3">
              <hr class="flex-grow border-t border-gray-300">
              <span class="mx-4 text-gray-600 text-sm font-medium">Or choose from existing hashtags</span>
              <hr class="flex-grow border-t border-gray-300">
            </div>
            <select id="selectedHashtag" multiple class="w-full p-2 border border-gray-300 rounded-lg">
              @foreach($allhashtags as $hashtag)
                <option value="{{ $hashtag }}" {{ in_array($hashtag, $initialTags) ? 'selected' : '' }}>
                  #{{ $hashtag }}
                </option>
              @endforeach
            </select>
            <button type="button" onclick="addSelectedHashtags()" 
                    class="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              <i class="fas fa-plus mr-1"></i> Add Selected Hashtags
            </button>
          </div>
          @endif
        </div>

        <!-- Comments Toggle -->
        <div class="mb-6">
          <div class="flex items-center p-3 bg-gray-100 rounded-lg">
            <input type="checkbox" name="allow_comments" id="allow_comments" value="1" 
                   {{ old('allow_comments', true) ? 'checked' : '' }}
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
            <label for="allow_comments" class="ml-2 text-sm font-medium text-gray-900">
              Allow comments on this post
            </label>
          </div>
          @error('allow_comments')
          <p class="text-red-500 text-xs italic mt-2">
              {{ $message }}
          </p>
          @enderror
        </div>

        <!-- Submit Button -->
        <div class="mt-8 flex justify-center">
          <button type="submit"
                  class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <i class="fas fa-paper-plane mr-2"></i> Publish Post
          </button>
        </div>
      </form>
    </div>
  </div>

@php
  $initialTags = old('hashtag') ? explode(',', old('hashtag')) : [];
@endphp

@push('styles')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<style>
  .cke_chrome {
    border: 1px solid #e5e7eb !important;
    border-radius: 0.5rem !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
  }
  
  .cke_top {
    border-bottom: 1px solid #e5e7eb !important;
    background: linear-gradient(to bottom, #f9fafb, #f3f4f6) !important;
    border-radius: 0.5rem 0.5rem 0 0 !important;
  }
  
  .cke_bottom {
    border-top: 1px solid #e5e7eb !important;
    background: linear-gradient(to bottom, #f3f4f6, #f9fafb) !important;
    border-radius: 0 0 0.5rem 0.5rem !important;
  }
  
  .cke_contents {
    background: white !important;
    border-radius: 0 0 0.5rem 0.5rem !important;
  }
  
  /* Custom scrollbar for CKEditor */
  .cke_contents::-webkit-scrollbar {
    width: 8px;
  }
  
  .cke_contents::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  .cke_contents::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  .cke_contents::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
</style>
@endpush

@push('scripts')
<!-- Load CKEditor 4 from CDN -->
<script src="https://cdn.ckeditor.com/4.23.0-lts/standard/ckeditor.js"></script>

<script>
  // Initialize CKEditor 4 with enhanced configuration
  CKEDITOR.replace('editor', {
    toolbar: [
      { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'Preview', 'Print'] },
      { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
      { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
      { name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton'] },
      '/',
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
      { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
      { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
      { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'] },
      '/',
      { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      { name: 'tools', items: ['Maximize', 'ShowBlocks'] }
    ],
    height: 400,
    removeButtons: 'Underline,Subscript,Superscript',
    format_tags: 'p;h1;h2;h3;h4;h5;h6;pre',
    removeDialogTabs: 'image:advanced;link:advanced',
    extraPlugins: 'colorbutton,font,justify',
    
    // File upload configuration for CKEditor
    filebrowserUploadUrl: "{{ route('tinymce.upload') }}",
    filebrowserUploadMethod: 'form',
    
    // Enhanced configuration
    allowedContent: true,
    autoUpdateElement: true,
    enterMode: CKEDITOR.ENTER_P,
    shiftEnterMode: CKEDITOR.ENTER_BR,
    
    // Custom styles
    stylesSet: [
      { name: 'Title', element: 'h1', attributes: { 'class': 'post-title' } },
      { name: 'Subtitle', element: 'h2', attributes: { 'class': 'post-subtitle' } },
      { name: 'Quote', element: 'blockquote', attributes: { 'class': 'post-quote' } },
      { name: 'Code', element: 'code', attributes: { 'class': 'post-code' } }
    ],
    
    // Event handlers
    on: {
      instanceReady: function() {
        // Set initial content if there's old input
        @if(old('description'))
          this.setData(`{!! old('description') !!}`);
        @endif
        
        console.log('CKEditor is ready!');
      },
      change: function() {
        // Auto-save draft functionality can be added here
        console.log('Content changed');
      }
    }
  });

  // Enhanced form submission handler
  document.querySelector('form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value.trim();
    const editorData = CKEDITOR.instances.editor.getData();
    const cleanEditorData = editorData.replace(/<[^>]*>/g, '').trim(); // Strip HTML tags for validation
    
    // Validation
    let isValid = true;
    let errorMessage = '';
    
    if (!title) {
      isValid = false;
      errorMessage = 'Please enter a title for your post.';
    } else if (!cleanEditorData) {
      isValid = false;
      errorMessage = 'Please enter some content for your post.';
    } else if (title.length < 5) {
      isValid = false;
      errorMessage = 'Title should be at least 5 characters long.';
    } else if (cleanEditorData.length < 10) {
      isValid = false;
      errorMessage = 'Post content should be at least 10 characters long.';
    }
    
    if (!isValid) {
      e.preventDefault();
      
      // Show custom alert
      const alertDiv = document.createElement('div');
      alertDiv.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50';
      alertDiv.innerHTML = `
        <div class="flex items-center">
          <i class="fas fa-exclamation-triangle mr-2"></i>
          <span>${errorMessage}</span>
        </div>
      `;
      document.body.appendChild(alertDiv);
      
      // Remove alert after 5 seconds
      setTimeout(() => {
        alertDiv.remove();
      }, 5000);
      
      return false;
    }
    
    // Update the textarea with CKEditor content
    document.getElementById('editor').value = editorData;
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Publishing...';
    submitBtn.disabled = true;
    
    // Re-enable button if form submission fails
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 5000);
  });

  // Enhanced image preview functionality
  document.getElementById('imageSelected').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('imagePreview');
    const imageInfo = document.getElementById('imageInfo');
    const fileSize = document.getElementById('fileSize');
    
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, GIF, or WebP).');
        this.value = '';
        return;
      }
      
      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert('Image size should be less than 5MB.');
        this.value = '';
        return;
      }
      
      const reader = new FileReader();
      
      reader.onload = function(e) {
        preview.src = e.target.result;
        preview.classList.remove('hidden');
        imageInfo.classList.remove('hidden');
        
        // Display file info
        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        const dimensions = `${file.type.split('/')[1].toUpperCase()} • ${sizeInMB} MB`;
        fileSize.textContent = dimensions;
      }
      
      reader.readAsDataURL(file);
    }
  });

  // Cancel image preview
  document.addEventListener('click', function(e) {
    if (e.target.id === 'cancelPreview' || e.target.closest('#cancelPreview')) {
      const preview = document.getElementById('imagePreview');
      const imageInfo = document.getElementById('imageInfo');
      const fileInput = document.getElementById('imageSelected');
      
      preview.classList.add('hidden');
      imageInfo.classList.add('hidden');
      fileInput.value = '';
    }
  });

  // Enhanced hashtag functionality
  const hashtagsHidden = document.getElementById('hashtagsHidden');
  const tagContainer = document.getElementById('tagContainer');
  const hashtagInput = document.getElementById('hashtagInput');
  let hashtags = @json($initialTags);

  // Initialize tags
  function renderTags() {
    tagContainer.innerHTML = '';
    
    if (hashtags.length === 0) {
      tagContainer.innerHTML = '<span class="text-gray-500 text-sm">No hashtags added yet. Type below and press Enter.</span>';
    } else {
      hashtags.forEach((tag, index) => {
        const tagElement = document.createElement('div');
        tagElement.className = 'bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-full flex items-center space-x-2 shadow-sm';
        tagElement.innerHTML = `
          <span class="text-sm font-medium">#${tag}</span>
          <button type="button" onclick="removeTag(${index})" 
                  class="w-5 h-5 bg-white text-blue-600 rounded-full flex items-center justify-center text-xs font-bold hover:bg-gray-100 transition-colors">
            ×
          </button>
        `;
        tagContainer.appendChild(tagElement);
      });
    }
    
    hashtagsHidden.value = hashtags.join(',');
  }

  function addTag(tag) {
    const cleanTag = tag.trim().replace(/#/g, '').toLowerCase();
    
    if (!cleanTag) return;
    
    // Validate tag length
    if (cleanTag.length > 20) {
      showAlert('Hashtag should be less than 20 characters.', 'warning');
      return;
    }
    
    // Validate tag format (alphanumeric and underscores only)
    if (!/^[a-z0-9_]+$/.test(cleanTag)) {
      showAlert('Hashtag can only contain letters, numbers, and underscores.', 'warning');
      return;
    }
    
    if (!hashtags.includes(cleanTag)) {
      if (hashtags.length >= 10) {
        showAlert('Maximum 10 hashtags allowed.', 'warning');
        return;
      }
      
      hashtags.push(cleanTag);
      renderTags();
      showAlert(`Hashtag "#${cleanTag}" added successfully!`, 'success');
    } else {
      showAlert(`Hashtag "#${cleanTag}" already exists.`, 'info');
    }
  }

  function removeTag(index) {
    const removedTag = hashtags[index];
    hashtags.splice(index, 1);
    renderTags();
    showAlert(`Hashtag "#${removedTag}" removed.`, 'info');
  }

  // Add tag on Enter key
  hashtagInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(this.value);
      this.value = '';
    }
  });

  // Add selected hashtags from dropdown
  window.addSelectedHashtags = function() {
    const select = document.getElementById('selectedHashtag');
    const selectedOptions = Array.from(select.selectedOptions);
    
    if (selectedOptions.length === 0) {
      showAlert('Please select at least one hashtag.', 'warning');
      return;
    }
    
    selectedOptions.forEach(option => {
      addTag(option.value);
    });
    
    // Clear selection
    select.selectedIndex = -1;
    showAlert(`${selectedOptions.length} hashtag(s) added successfully!`, 'success');
  }

  // Utility function to show alerts
  function showAlert(message, type = 'info') {
    const colors = {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500'
    };
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `fixed top-4 right-4 ${colors[type]} text-white p-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0`;
    alertDiv.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'}-circle mr-2"></i>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Remove alert after 4 seconds
    setTimeout(() => {
      alertDiv.style.transform = 'translateX(100%)';
      setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    renderTags();
    
    // Auto-save draft every 30 seconds (optional)
    setInterval(() => {
      const editorData = CKEDITOR.instances.editor.getData();
      const title = document.getElementById('title').value;
      
      if (editorData || title) {
        localStorage.setItem('postDraft', JSON.stringify({
          title: title,
          content: editorData,
          hashtags: hashtags,
          timestamp: new Date().toISOString()
        }));
      }
    }, 30000);
    
    // Load draft if exists
    const draft = localStorage.getItem('postDraft');
    if (draft) {
      const draftData = JSON.parse(draft);
      if (confirm('We found a saved draft. Would you like to restore it?')) {
        document.getElementById('title').value = draftData.title || '';
        CKEDITOR.instances.editor.setData(draftData.content || '');
        hashtags = draftData.hashtags || [];
        renderTags();
      }
    }
  });

  // Clear draft when form is successfully submitted
  document.querySelector('form').addEventListener('submit', function() {
    localStorage.removeItem('postDraft');
  });
</script>
@endpush
</x-layout>