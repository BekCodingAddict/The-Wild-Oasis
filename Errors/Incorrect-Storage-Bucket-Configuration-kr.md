# Supabase 스토리지 버킷 설정 오류
### 문제:
- Supabase 스토리지에서 파일을 업로드하거나 가져오려 할 때, 버킷이 올바르게 설정되지 않았거나 파일 경로가 잘못된 경우 오류가 발생할 수 있습니다.

### 일반적인 오류 메시지:
```
Storage bucket not found or unauthorized access

```
### 원인:
- API 호출에서 사용된 버킷 이름이 잘못되었음.
- 스토리지 버킷에 올바른 권한이 설정되지 않았거나 버킷이 존재하지 않음.
- 제공된 파일 경로가 잘못되었거나 저장된 파일 구조와 일치하지 않음.

### 해결 방법:
- 버킷 이름 확인: 사용 중인 버킷 이름이 정확한지 확인하세요. Supabase 대시보드의 Storage 섹션에서 확인할 수 있습니다.
```javascript
const { error } = await supabase.storage.from('correct_bucket_name').upload('path/to/file', file);
if (error) console.error('업로드 실패:', error.message);
```
- 파일 경로 및 권한 확인: 파일 경로가 버킷 내 구조와 일치하는지, 그리고 파일 권한이 의도한 접근(공개 또는 비공개)을 허용하는지 확인하세요.
```javascript
const { data, error } = await supabase.storage.from('bucket_name').download('path/to/file');
if (error) console.error('다운로드 실패:', error.message);
```
- 버킷 권한 설정: Supabase 대시보드에서 버킷의 공개 또는 비공개 접근 설정을 조정하여 필요에 따라 접근을 허용하거나 제한하세요.
- 올바른 인증 확인: 비공개 버킷의 경우, 사용자가 인증되었고 스토리지에 접근할 수 있는 권한이 있는지 확인하세요.

### 발생한 날짜:
- Oct 11, 2024
